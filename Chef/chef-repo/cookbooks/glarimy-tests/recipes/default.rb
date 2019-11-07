directory "/etc/testbook" do
  owner "root"
  group "root"
  mode "0755"
  action :create
end

cookbook_file "/etc/testbook/log.sh" do
  source "log.sh"
  group "root"
  owner "root"
  mode "0644"
end
