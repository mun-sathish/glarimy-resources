import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from '../middleware/logger';
import rest from '../middleware/rest';


import listReducer from './listReducer';
import countReducer from './countReducer';

let store = createStore(combineReducers({
    employees: listReducer,
    counter: countReducer
}), applyMiddleware(rest, logger));

export default store;