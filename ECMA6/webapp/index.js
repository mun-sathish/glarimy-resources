'use strict'

function compute(){
    const p = document.getElementById('p').value;
    const t = document.getElementById('t').value;
    const r = document.getElementById('r').value;
    
    let i = p*t*r/100;
    
    document.getElementById('i').innerHTML = i;
}

