'use strict'

class Calculator{
    constructor() {
        this.compute = (p, t, r) => {
            return new Promise((resolve, reject) => {
                resolve (p*t*r/100);
            });
        }
    }
}

export default Calculator;