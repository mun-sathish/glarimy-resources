/*
load('/Users/glarimy/Professional/Engineering/glarimy-resources/mongodb/employees.js');
*/

db.employees.drop();
var fnames = ["Krishna", "Vishnu", "Sriram", "Karuna", "Latha", "Vijay", "Dhanu", "Manas", "Madhu", "Syam"];
var lnames = ["Koyya", "Pandey", "Mittal"];
var cities = ["Bengaluru", "Mysuru", "Manguluru"];
var pin = 560000;
var phone = 9731423166

for(var i=0; i<fnames.length; i++){
	for(var j=0; j<lnames.length; j++){
		var name = {
			fname : fnames[i],
			lname : lnames[j]
		}
		if(i%3==0) 
			name.prefix = "Dr";

		var designation = "Software Engineer";

		if(i%4==0)
			designation = "Engineering Manager";

		var address = {
			location: "street no: " + (j+1),
			pincode: pin++,
			city: cities[j]
		}
		var record = {
			name: name,
			address: address,
			salary: (i+1) * (j+1) * 1000,
			doj: new Date('2019-'+(j+1)+'-'+(i+1)),
			phones: [phone++, phone++],
			designation: designation,
			email: name.fname+"."+name.lname+"@glarimy.com",
			leaves: []
		}
		db.employees.insert(record);
	}
}


/*
show dbs;
show collections;
db.isMaster();
*/

db.employees.count();
db.employees.find().pretty();
db.employees.findOne({"designation":"Software Engineer"});
db.employees.find({"designation":"Software Engineer"}).count();
db.employees.find({"designation":"Software Engineer"}).limit(2).pretty();
db.employees.find({"designation":"Software Engineer"}).skip(2).limit(2).pretty();
db.employees.find({"designation":"Software Engineer"}).skip(2).limit(2).sort({'salary': 1}).pretty();
db.employees.find({"$or":[{"designation":"Software Engineer", "designation":"Engineering Manager"}]}).count();
db.employees.find({"email":/^Mitt/}).count();
db.employees.find({"email":/Mitt/}).count();
db.employees.find({"email":/Kri/}, {"name.lname": 1, salary: 1}).pretty();
db.employees.find({"email":/Kri/}, {"name.lname": 0, salary: 0}).pretty();
db.employees.find({"salary": {"$gt": 1000, "$lte": 9000}}, {"salary": 1});
db.employees.find({"address.pincode": {"$in": [560001, 560002, 560003]}}, {"name": 1});
db.employees.find({'address.city': {$exists: true}}).count();
db.employees.find({"email":/Mitt/}).explain('executionStats');
db.employees.createIndex({"email": 1});
db.employees.dropIndex({"email": 1});
db.logs.createIndex({time_field: 1}, {expireAfterSeconds: 3600});
db.createCollection("logs", {"capped": true, "size": 16384});
db.logs.drop();
db.employees.update({"name.fname": "Krishna"}, {"$push": {"leaves": {"from": new Date(), "to": new Date()}}})
db.employees.find({"name.fname":"Krishna"}, "leaves").pretty();
db.employees.find({"leaves": {"$size": 0}}).count();
------------------

>>>>>>>>>>>>>>>>  Map/Reduce <<<<<<<<<<<<<<<<<

db.employees.mapReduce( 
	function() {   
		emit(this.designation, 1); 
	}, 
	function(k, vs) {
		let count = 0;
	    for(let i=0; i<vs.length; i++)
	    	count++
		return count; 
	},{   
		out: "count" 
	}
).find();

db.employees.mapReduce( 
	function() {   
		emit(this.designation, {
			salary: this.salary
		}); 
	}, 
	function(k, vs) {
		let salary = 0;
	    for(let i=0; i<vs.length; i++)
	    	salary += vs[i].salary;
		return salary; 
	},{   
		out: "salary" 
	}
).find();

>>>>>>>>>>>>  ReplicaSet Lab Session  <<<<<<<<<<<<<<<

cd /Users/glarimy/Professional/Engineering/glarimy-resources/mongodb
mkdir databases
cd databases
mkdir node1
mkdir node2
mkdir aribter
cd /Users/glarimy/Professional/Programs/mongodb-macos-x86_64-4.2.0/bin/
./mongod --replSet glarimy --dbpath /Users/glarimy/Professional/Engineering/glarimy-resources/mongodb/databases/node1 --port 40000
./mongod --replSet glarimy --dbpath /Users/glarimy/Professional/Engineering/glarimy-resources/mongodb/databases/node2 --port 40001
./mongod --replSet glarimy --dbpath /Users/glarimy/Professional/Engineering/glarimy-resources/mongodb/databases/arbiter --port 40002
./mongo --port 40000
> rs.initiate()
> rs.add("localhost:40001")
> rs.add("localhost:40002", {arbiterOnly: true})
> rs.isMaster()
> rs.status()
> use employees
> db.employees.insert({name:"Krishna"})
> db.employees.find()
./mongo --port 40001
> rs.slaveOk()
> show dbs
> use employees
> db.employees.find()
./mongo --port 40000
> use admin
./mongo --port 40001
./mongod --replSet glarimy --dbpath /Users/glarimy/Professional/Engineering/glarimy-resources/mongodb/databases/node1 --port 40000
./mongo --port 40000






























