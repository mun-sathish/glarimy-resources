import TYPES from '../actions/types';

export default function listReducer (state={
    list: []
}, action){
    switch(action.type){
        case TYPES.FETCH:
            return {
                list: action.employees
            }
        case TYPES.ADD:
            return {
                list: [...state.list, action.employee]
            }
        case TYPES.REMOVE:
            let employees = state.list.filter(e => e.id != action.id);
            return {
                list: employees
            }
        default:
            return state; 
    }
}
