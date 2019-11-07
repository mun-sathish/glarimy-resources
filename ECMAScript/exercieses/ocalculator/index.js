addEventListener('load', function () {
    document.getElementById('addBtn').addEventListener('click', function () {
        const first = document.getElementById('first').value;
        const second = document.getElementById('second').value;
        document.getElementById('result').innerHTML = `${first} + ${second} = ${Calculator.sum(first, second)}`;
    });
    document.getElementById('subtractBtn').addEventListener('click', function () {
        const first = document.getElementById('first').value;
        const second = document.getElementById('second').value;
        document.getElementById('result').innerHTML = `${first} - ${second} = ${Calculator.diff(first, second)}`;
    });
});
