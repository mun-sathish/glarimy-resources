#
# Cookbook:: tomcat
# Resource:: install
#
# Copyright:: 2016-2017, Chef Software, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

property :instance_name, String, name_property: true
property :version, String, default: '8.0.47'
property :install_path, String, default: lazy { |r| "/opt/tomcat_#{r.instance_name}_#{r.version.tr('.', '_')}/" }
property :tarball_base_uri, String, default: 'http://archive.apache.org/dist/tomcat/', desired_state: false
property :checksum_base_uri, String, default: 'http://archive.apache.org/dist/tomcat/', desired_state: false
property :verify_checksum, [true, false], default: true, desired_state: false
property :dir_mode, String, default: '0750'
property :exclude_docs, [true, false], default: true, desired_state: false
property :exclude_examples, [true, false], default: true, desired_state: false
property :exclude_manager, [true, false], default: false, desired_state: false
property :exclude_hostmanager, [true, false], default: false, desired_state: false
property :tarball_uri, String, default: '', desired_state: false
property :tarball_path, String, default: lazy { |r| "#{Chef::Config['file_cache_path']}/apache-tomcat-#{r.version}.tar.gz" }, desired_state: false
property :tarball_validate_ssl, [true, false], default: true, desired_state: false
property :tomcat_user, String, default: lazy { |r| "tomcat_#{r.instance_name}" }
property :tomcat_group, String, default: lazy { |r| "tomcat_#{r.instance_name}" }
property :tomcat_user_shell, String, default: '/bin/false'
property :create_user, [true, false], default: true, desired_state: false
property :create_group, [true, false], default: true, desired_state: false

action :install do
  validate_version

  # Support file:// uri moniker but short-circuit into a better pattern.
  new_resource.tarball_path = new_resource.tarball_uri.sub(%r{^file://}, '') if new_resource.tarball_uri.start_with?('file://')

  # some RHEL systems lack tar in their minimal install
  package 'tar'

  group new_resource.tomcat_group do
    action :create
    append true
    only_if { new_resource.create_group }
  end

  user new_resource.tomcat_user do
    gid new_resource.tomcat_group
    shell new_resource.tomcat_user_shell
    system true
    action :create
    only_if { new_resource.create_user }
  end

  directory 'tomcat install dir' do
    mode new_resource.dir_mode.to_s
    path new_resource.install_path
    recursive true
    owner new_resource.tomcat_user
    group new_resource.tomcat_group
  end

  remote_file "apache #{new_resource.version} tarball" do
    source tarball_uri
    path new_resource.tarball_path
    verify { |file| validate_checksum(file) } if new_resource.verify_checksum
    # If a file already exists at the path specified, and we skip checksum verification, then we can assume that the file was laid down by the user.
    not_if { ::File.exist?(new_resource.tarball_path) } unless new_resource.verify_checksum
  end

  execute 'extract tomcat tarball' do
    command extraction_command
    action :run
    creates ::File.join(new_resource.install_path, 'LICENSE')
  end

  # make sure the instance's user owns the instance install dir
  execute "chown install dir as tomcat_#{new_resource.instance_name}" do
    command "chown -R #{new_resource.tomcat_user}:#{new_resource.tomcat_group} #{new_resource.install_path}"
    action :run
    not_if { Etc.getpwuid(::File.stat("#{new_resource.install_path}/LICENSE").uid).name == new_resource.tomcat_user }
  end

  # create a link that points to the latest version of the instance
  link "/opt/tomcat_#{new_resource.instance_name}" do
    to new_resource.install_path
  end
end

action_class do
  # break apart the version string to find the major version
  def major_version
    @major_version ||= new_resource.version.split('.')[0]
  end

  # build the extraction command based on the passed properties
  def extraction_command
    cmd = "tar -xzf #{new_resource.tarball_path} -C #{new_resource.install_path} --strip-components=1"
    cmd << " --exclude='*webapps/examples*'" if new_resource.exclude_examples
    cmd << " --exclude='*webapps/ROOT*'" if new_resource.exclude_examples
    cmd << " --exclude='*webapps/docs*'" if new_resource.exclude_docs
    cmd << " --exclude='*webapps/manager*'" if new_resource.exclude_manager
    cmd << " --exclude='*webapps/host-manager*'" if new_resource.exclude_hostmanager
    cmd
  end

  # ensure the version is X.Y.Z format
  def validate_version
    return if new_resource.version =~ /\d+.\d+.\d+/
    Chef::Log.fatal("The version must be in X.Y.Z format. Passed value: #{new_resource.version}")
    raise
  end

  # returns the URI of the apache.org generated checksum based on either
  # an absolute path to the tarball or the tarball based path.
  def checksum_uri(sum_form)
    if new_resource.tarball_uri.empty?
      URI.join(new_resource.checksum_base_uri, "tomcat-#{major_version}/v#{new_resource.version}/bin/apache-tomcat-#{new_resource.version}.tar.gz.#{sum_form}")
    else
      URI("#{new_resource.tarball_uri}.#{sum_form}")
    end
  end

  # fetch the md5 checksum from the mirrors
  # we have to do this since the md5 chef expects isn't hosted
  def fetch_checksum(form)
    uri = checksum_uri(form)
    request = Net::HTTP.new(uri.host, uri.port)
    if uri.to_s.start_with?('https')
      request.use_ssl = true
      request.verify_mode = OpenSSL::SSL::VERIFY_NONE unless new_resource.tarball_validate_ssl
    end
    response = request.get(uri)
    if response.code != '200'
      Chef::Log.fatal("Fetching the Tomcat tarball checksum at #{uri} resulted in an error #{response.code}")
      raise
    end
    response.body.split(' ')[0]
  rescue => e
    Chef::Log.fatal("Could not fetch the checksum due to an error: #{e}")
    raise
  end

  # validate the mirror checksum against the on disk checksum
  # return true if they match. Append .bad to the cached copy to prevent using it next time
  def validate_checksum(file_to_check)
    # Apache started using sha512 (replacing md5) in these versions and now
    # only publishes sha512 checksums
    sum_form = case Gem::Version.new(new_resource.version)
               when -> (v) { Gem::Requirement.new('~> 7.0.84').satisfied_by?(v) }
                 'sha512'
               when -> (v) { Gem::Requirement.new('~> 8.0.48').satisfied_by?(v) }
                 'sha512'
               when -> (v) { Gem::Requirement.new('~> 8.5.24').satisfied_by?(v) }
                 'sha512'
               when -> (v) { Gem::Requirement.new('~> 9.0.10').satisfied_by?(v) }
                 'sha512'
               else
                 'md5'
               end

    desired = fetch_checksum(sum_form)
    klass = Object.const_get("Digest::#{sum_form.upcase}")
    actual = klass.hexdigest(::File.read(file_to_check))

    if desired == actual
      true
    else
      Chef::Log.fatal("The checksum of the tomcat tarball on disk (#{actual}) does not match the checksum provided from the mirror (#{desired}). Renaming to #{::File.basename(file_to_check)}.bad")
      ::File.rename(file_to_check, "#{file_to_check}.bad")
      raise
    end
  end

  # build the complete tarball URI and handle basepath with/without trailing /
  def tarball_uri
    uri = ''
    if new_resource.tarball_uri.empty?
      uri << new_resource.tarball_base_uri
      uri << '/' unless uri[-1] == '/'
      uri << "tomcat-#{major_version}/v#{new_resource.version}/bin/apache-tomcat-#{new_resource.version}.tar.gz"
    else
      uri << new_resource.tarball_uri
    end
    uri
  end
end

# retain backwards compatibility with the old property name
alias_method :sha1_base_path, :checksum_base_uri

# Semantically, these are uris, not paths.
alias_method :tarball_base_path, :tarball_base_uri
alias_method :checksum_base_path, :checksum_base_uri
