import Question from './Question';

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

export default QuestionBank;