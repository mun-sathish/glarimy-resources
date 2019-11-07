class Calculator {
    add(n1, n2){
        return new Promise(function(resolve, reject){
            if(n1 < 0 || n2< 0)
                reject("invalid input");
            else    
                resolve(n1+n2);
        });
    }
}

export default Calculator;