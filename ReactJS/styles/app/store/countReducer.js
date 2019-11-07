import ACTION from '../actions/actions';

export default function countReducer(state={
    count: 0
}, action){
    switch(action.type){
        case ACTION.FETCH:
            return {
                count: action.employees.length
            }
        case ACTION.ADD:
            return {
                count: state.count+1
            }
        case ACTION.REMOVE:
            return {
                count: state.count-1
            }
        default:
            return state;
    }
}
