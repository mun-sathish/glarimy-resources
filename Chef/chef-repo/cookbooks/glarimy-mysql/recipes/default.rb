mysql_service 'glarimy' do
  port '3306'
  version '5.7'
  initial_root_password 'admin'
  action [:create, :start]
end