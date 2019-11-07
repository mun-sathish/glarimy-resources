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




























