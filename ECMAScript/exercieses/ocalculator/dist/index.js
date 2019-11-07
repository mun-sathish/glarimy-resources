'use strict';

addEventListener('load', function () {
    document.getElementById('addBtn').addEventListener('click', function () {
        var first = document.getElementById('first').value;
        var second = document.getElementById('second').value;
        document.getElementById('result').innerHTML = first + ' + ' + second + ' = ' + Calculator.sum(first, second);
    });
    document.getElementById('subtractBtn').addEventListener('click', function () {
        var first = document.getElementById('first').value;
        var second = document.getElementById('second').value;
        document.getElementById('result').innerHTML = first + ' - ' + second + ' = ' + Calculator.diff(first, second);
    });
});