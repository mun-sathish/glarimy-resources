import Question from './Question';
import QuestionBank from './QuestionBank';

let qb = new QuestionBank();
qb.add(new Question({
    id: 1,
    description: "What is the capital of India?",
    a: "Mumbai",
    b: "Kolkota",
    c: "New Delhi",
    d: "None of the above",
    answer: "c"
}));
qb.add(new Question({
    id: 2,
    description: "What is the currency of India?",
    a: "Indian Doller",
    b: "Indian Pound",
    c: "Rupaiah",
    d: "Rupee",
    answer: "d"
}));
qb.list();