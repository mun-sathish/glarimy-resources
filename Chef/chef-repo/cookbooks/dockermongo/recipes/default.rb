docker_service 'default' do
    action [:create, :start]
end

docker_image 'mongo' do
    action :pull
end

docker_container 'mongo' do
    hostname 'glarimy-mongo'
    port '27020:27017'
    command '--replSet ttnd --noprealloc --smallfiles'
end