import Calculator from './Calculator';

let calc = new Calculator();
calc.add(23, 45)
.then(sum => console.log(`Sum is ${sum}`))
.catch(err => console.log(err));
