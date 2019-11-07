import Employee from './Employee';
import Manager from './Manager';

class Directory {
    constructor() {
        this.employees = {}
    }
    add(employee) {
        return new Promise((resolve, reject)=> {
            if (employee instanceof Employee) {
                if (employee == undefined
                    || employee.eid == undefined
                    || employee.name == undefined
                    || employee.email == undefined
                )
                    reject("Invalid Employee");
                if (employee instanceof Manager)
                    if (employee.team == undefined)
                        reject("Invalid Manager");
                this.employees[employee.eid] = employee;
                resolve();
            } else {
                reject("Invalid Employee");
            }
        });
    }

    find(eid) {
        return new Promise( (resolve, reject)=> {
            let employee = this.employees[eid];
            if (employee)
                resolve(employee);
            reject(`No employee is found with ID: ${eid}`);
        });
    }

    print() {
        return new Promise( (resolve, reject) =>{
            console.log(`EMPLOYEES`);
            for (const eid in this.employees) {
                this.employees[eid].print();
            }
            resolve();
        });
    }
}

export default Directory;