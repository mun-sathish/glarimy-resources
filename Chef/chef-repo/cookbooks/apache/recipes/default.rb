apt_update

package 'apache2' do	
	action :install
end

service 'apache2' do
	action [:enable, :start]
end

directory '/var/www/html/glarimy' do
  owner 'root'
  group 'root'
  mode '0755'
  action :create
end

cookbook_file "/var/www/html/glarimy/index.html" do
  source "homepage.html"
  mode "0644"
end