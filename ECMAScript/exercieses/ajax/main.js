"use strict"
import Calculator from './Calculator';

document.getElementById('btn').addEventListener('click', ()=> {
    const p = document.getElementById('p').value;
    const t = document.getElementById('t').value;
    const r = document.getElementById('r').value;

    let calc = new Calculator();
    calc.compute(p, t, r).then(interest => document.getElementById('i').innerHTML = interest + " only");
});