execute 'first' do
	command 'echo hello'
	action :nothing
end

execute 'second' do
	command 'echo how are you?'
	action :nothing
end

execute 'third' do
	command 'echo see you later!'
	action :nothing
end

execute 'all' do
	command 'echo friend'
	notifies :run, 'execute[first]', :before
  	notifies :run, 'execute[second]', :immediately
  	notifies :run, 'execute[third]', :delayed
end