file "/tmp/glarimy-cron-logs.txt" do
  action :create_if_missing
end

cron 'glarimy-cron-log' do
  minute "*/#{node['minutes']}"
  command 'echo "message added by cron" >> /tmp/glarimy-cron-logs.txt'
end