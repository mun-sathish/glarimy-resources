execute 'third' do
	command 'echo see you later!'
	action :nothing
	subscribes :run, 'execute[second]', :immediately
end

execute 'second' do
	command 'echo how are you?'
	action :nothing
	subscribes :run, 'execute[first]', :immediately
end

execute 'first' do
	command 'echo hello'
end

