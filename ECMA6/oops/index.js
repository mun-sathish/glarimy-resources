class Employee {
    constructor(eid, name, email) {
        this.eid = eid;
        this.name = name;
        this.email = email;
    }
    print() {
        console.log(`ID: ${this.eid} | Name: ${this.name} | Email: ${this.email}`);
    }
}

class Manager extends Employee {
    constructor(eid, name, email, team) {
        super(eid, name, email);
        this.team = team;
    }
    print() {
        super.print();
        console.log(`TEAM: ${this.team}`);
    }
}

class Directory {
    constructor() {
        this.employees = {}
    }
    add(employee) {
        if (employee instanceof Employee) {
            if (employee == undefined
                || employee.eid == undefined
                || employee.name == undefined
                || employee.email == undefined
            )
                throw "Invalid Employee";
            if (employee instanceof Manager)
                if (employee.team == undefined)
                    throw "Invalid Manager";
            this.employees[employee.eid] = employee;
        } else {
            throw "Invalid Employee";
        }
    }

    find(eid) {
        let employee = this.employees[eid];
        if (employee) return employee;
        throw `No employee is found with ID: ${eid}`;
    }

    print() {
        console.log(`EMPLOYEES`);
        for (const eid in this.employees) {
            this.employees[eid].print();
        }
    }
}

let directory = new Directory();
try {
    directory.add(new Employee("GTS0006", "Prabhu Deva Pangidi", "prabhudeva.pangidi@glarimy.com"));
    directory.add(new Manager("GTS0001", "Krishna Mohan Koyya", "krishna@glarimy.com", ["GTS0006"]));
    directory.add(new Manager("GTS0001", "Krishna Mohan Koyya", "krishna@glarimy.com"));
} catch (error) {
    console.log(error);
}
try {
    directory.print();
    directory.find("GTS0001").print();
} catch (error) {
    console.log(error);
}