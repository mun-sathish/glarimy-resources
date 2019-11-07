import store from '../store/store';
import TYPES from './types';

export function fetchEmployees() {
    fetch('employees.json').then(response => {
        response.json().then(data => {
            let employees = data.employees;
            store.dispatch({
                type: TYPES.FETCH,
                employees: employees
            });
        })
    });
}

export function addEmployee(employee) {
    fetch('employees', {
        method: 'post',
        body: JSON.stringify(employee)
    }).then(response => {
        store.dispatch({
            type: TYPES.ADD,
            employee: employee
        });
    });

}

export function removeEmployee(id) {
    fetch(`employees/${id}`, {
        method: 'delete'
    }).then(response => {
        store.dispatch({
            type: TYPES.REMOVE,
            id: id
        });
    });
}