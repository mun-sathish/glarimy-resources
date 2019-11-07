import ACTION from "./actions";

export const fetchEmployees = () => ({
    type: ACTION.FETCH
});


export const addEmployee = employee => ({
    type: ACTION.ADD,
    employee: employee
});

export const removeEmployee = id => ({
    type: ACTION.REMOVE,
    id: id
});