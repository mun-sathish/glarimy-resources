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

template '/var/www/html/glarimy/index.html' do
	source 'home.erb'
	variables(
		title: node['title'],
		logo: node['logo'],
		email: node['email'],
	)
end