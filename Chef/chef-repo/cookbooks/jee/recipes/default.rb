include_recipe "java"

tomcat_install 'glarimy' do
  version '8.0.36'
end

tomcat_service 'glarimy' do
  action :start
end

directory '/opt/tomcat_glarimy/webapps/glarimy' do
  owner 'root'
  group 'root'
  mode '0755'
  action :create
end

cookbook_file '/opt/tomcat_glarimy/webapps/glarimy/index.html' do
  source "homepage.html"
  mode "0644"
end