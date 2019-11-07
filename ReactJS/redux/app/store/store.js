import {createStore, combineReducers} from 'redux';


import listReducer from './listReducer';
import countReducer from './countReducer';

let store = createStore(combineReducers({
    employees: listReducer,
    counter: countReducer
}));

export default store;