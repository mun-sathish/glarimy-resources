class Question {
    constructor(q) {
        this.id = q.id;
        this.description = q.description;
        this.a = q.a;
        this.b = q.b;
        this.c = q.c;
        this.d = q.d;
        this.answer = q.answer;
    }
    print() {
        console.log(`
        ${this.description}

        (a) ${this.a}
        (b) ${this.b}
        (c) ${this.c}
        (d) ${this.d}
        `);
    }
}

class QuestionBank {
    constructor() {
        this.questions = [];
    }

    add(q) {
        if (q instanceof Question) {
            if (q.id == undefined
                || q.description == undefined
                || q.a == undefined
                || q.b == undefined
                || q.c == undefined
                || q.d == undefined
                || q.answer == undefined
            )
                throw "Invalid Question";
            else {
                if (this.questions.find(function (current) {
                    return q.id == current.id
                }) != undefined)
                    throw "Duplicate Question";
                this.questions.push(q);
            }
        } else
            throw "Invalid Question";
    }

    list() {
        this.questions.forEach(function (question) {
            question.print();
        })
    }

    evaluate(id, option) {
        let question = this.questions.find(function (q) {
            return q.id == id;
        })
        if (question && question.answer == option)
            return true;
        else
            return false;
    }
}

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