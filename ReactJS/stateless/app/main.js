"use strict"
import React from 'react';
import ReactDOM from 'react-dom';
import Directory from './components/Directory.jsx';
import { Provider } from 'react-redux';
import store from './store/store';
import { fetchEmployees } from './actions/action-creators';

store.dispatch(fetchEmployees());
ReactDOM.render(
    <Provider store={store}>
        <Directory/>
    </Provider>
    , document.getElementById('dir'));