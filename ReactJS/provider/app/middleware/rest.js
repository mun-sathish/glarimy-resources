import ACTION from "../actions/actions";

const rest = store => next => action => {
	if(action.type == ACTION.FETCH){
		fetch('employees.json').then(response => {
			response.json().then(data => {
				let employees = data.employees;
				return next({
					type: ACTION.FETCH,
					employees: employees
				});
			})
		});
	}

	if(action.type == ACTION.ADD){
		fetch('employees', {
			method: 'post',
			body: JSON.stringify(action.employee)
		}).then(response => {
			return next(action);
		});
	}

	if(action.type == ACTION.REMOVE){
		fetch('employees', {
			method: 'delete',
			body: JSON.stringify(action.id)
		}).then(response => {
			return next(action);
		});
	}
};

export default rest;