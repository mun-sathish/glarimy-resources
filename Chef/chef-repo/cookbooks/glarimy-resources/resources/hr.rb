resource_name :hr

actions :create
attribute :location, kind_of: String, name_property: true
attribute :source, kind_of: String
attribute :pwd, kind_of: String, default: 'admin' 

def createDatabase(user, pwd, db)
	return "mysql -h 127.0.0.1 -u #{user} -p#{pwd} -e \"create database if not exists #{db}\""
end

def buildCommand(user, pwd, db, query)
	return "mysql -h 127.0.0.1 -u #{user} -p#{pwd} #{db} -e \"#{query}\""
end

action 'create' do
	user = 'root'
	pwd = new_resource.pwd
	db = new_resource.location
	databag = new_resource.source

	apt_update

	#mysql_service "glarimy" do
	#	port '3306'
	#	version '5.7'
	#	initial_root_password pwd
	#	action [:create, :start]
	#end
	
	execute 'create database' do 
		command createDatabase(user, pwd, db)
	end

	execute 'drop table' do 
		command buildCommand(user, pwd, db, "drop table if exists employees")
	end

	execute 'create table' do 
		command buildCommand(user, pwd, db, "create table employees(eid varchar(32), name varchar(64), phone long, email varchar(64))")
	end

	employees = []

	begin
		employees = search("#{databag}", "*:*")
	rescue Net::HTTPServerException, Chef::Exceptions::InvalidDataBagPath
		log 'data-bag not found'
	end

	for employee in employees do
		id = employee['id']
		name = employee['name']
		email = employee['email']
		phone = employee['phone']

		execute 'insert record' do 
			command buildCommand(user, pwd, db, "insert into employees values('#{id}', '#{name}', #{phone}, '#{email}')")
		end
	end
end