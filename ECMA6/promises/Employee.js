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

export default Employee;
