"use strict"
import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Calculator.jsx';

ReactDOM.render(
    <Calculator
        currency='INR'
        isInvalidPrinciple={function (p) {
            return p == undefined || p == null || p.trim().length == 0 || isNaN(Number.parseInt(p)) || Number.parseInt(p) < 0
        }}
        isInvalidTime={function (t) {
            return t == undefined || t == null || t.trim().length == 0 || isNaN(Number.parseInt(t)) || Number.parseInt(t) < 0
        }}
        isInvalidRate={function (r) {
            return r == undefined || r == null || r.trim().length == 0 || isNaN(Number.parseInt(r)) || Number.parseInt(r) < 0
        }}
        styles={{
            error: {
                color: 'red'
            }
        }}
    />,
    document.getElementById('calc')
);