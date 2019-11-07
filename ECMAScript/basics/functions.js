'use strict'

function sort(data) {
    for (let i = 0; i < data.length; i++)
        for (let j = 0; j < data.length; j++)
            if (data[j] > data[j + 1]) {
                let temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
}

function min(data) {
    if(data.length == 0) return;
    if(data.length == 1) return data[0];

    let min = data[0];
    for (let i = 1; i < data.length; i++)
        min = data[i] < min ? data[i] : min;
    return min;
}

function max(data) {
    if(data.length == 0) return;
    if(data.length == 1) return data[0];

    let max = data[0];
    for (let i = 1; i < data.length; i++)
        max = data[i] > max ? data[i] : max;
    return max;
}

function ave(data) {
    if(data.length == 0) return;
    if(data.length == 1) return data[0];

    let sum = 0;
    for (let i = 0; i < data.length; i++)
        sum += data[i];
    let average = sum/data.length;
    return average;
}

function deduplicate(data){
    let result = [];
    for(let i=0; i<data.length; i++){
        let matched = false;
        for(let j=0; j<result.length; j++){
            if(result[j] == data[i]){
                matched = true;
                break;
            }
        }
        if(matched == false){
            result.push(data[i]);
        }
    }
    return result;
}