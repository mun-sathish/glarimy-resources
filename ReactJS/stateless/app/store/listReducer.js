import ACTION from '../actions/actions';

export default function listReducer (state={
    list: []
}, action){
    switch(action.type){
        case ACTION.FETCH:
            return {
                list: action.employees
            }
        case ACTION.ADD:
            return {
                list: [...state.list, action.employee]
            }
        case ACTION.REMOVE:
            let employees = state.list.filter(e => e.id != action.id);
            return {
                list: employees
            }
        default:
            return state; 
    }
}
