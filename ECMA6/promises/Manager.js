import Employee  from './Employee';

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

export default Manager;