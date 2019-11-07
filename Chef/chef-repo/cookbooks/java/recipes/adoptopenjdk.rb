# Cookbook:: java
# Recipe:: adoptopenjdk

include_recipe 'java::notify'

unless node.recipe?('java::default')
  Chef::Log.warn('Using java::default instead is recommended.')

  # Even if this recipe is included by itself, a safety check is nice...
  if node['java']['java_home'].nil? || node['java']['java_home'].empty?
    include_recipe 'java::set_attributes_from_version'
  end
end

include_recipe 'java::set_java_home'

java_home = node['java']['java_home']
arch = node['java']['arch']
version = node['java']['jdk_version'].to_s
variant = node['java']['adoptopenjdk']['variant']
tarball_url = node['java']['adoptopenjdk'][version][arch][variant]['url']
tarball_checksum = node['java']['adoptopenjdk'][version][arch][variant]['checksum']
bin_cmds = if node['java']['adoptopenjdk'][version]['bin_cmds'].key?(variant)
             node['java']['adoptopenjdk'][version]['bin_cmds'][variant]
           else
             node['java']['adoptopenjdk'][version]['bin_cmds']['default']
           end

adoptopenjdk_install 'adoptopenjdk' do
  url tarball_url
  default node['java']['set_default']
  checksum tarball_checksum
  app_home java_home
  bin_cmds bin_cmds
  alternatives_priority node['java']['alternatives_priority']
  retries node['java']['ark_retries']
  retry_delay node['java']['ark_retry_delay']
  reset_alternatives node['java']['reset_alternatives']
  variant variant
  action :install
  notifies :write, 'log[jdk-version-changed]', :immediately
end

if node['java']['set_default'] && platform_family?('debian')
  include_recipe 'java::default_java_symlink'
end
