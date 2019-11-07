import TYPES from '../actions/types';

export default function countReducer(state={
    count: 0
}, action){
    switch(action.type){
        case TYPES.FETCH:
            return {
                count: action.employees.length
            }
        case TYPES.ADD:
            return {
                count: state.count+1
            }
        case TYPES.REMOVE:
            return {
                count: state.count-1
            }
        default:
            return state;
    }
}
