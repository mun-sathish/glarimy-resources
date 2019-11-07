import Employee from './Employee';
import Manager from './Manager';

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

export default Directory;