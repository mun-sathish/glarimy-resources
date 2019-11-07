import Question from './Question';

class QuestionBank {
    constructor() {
        this.questions = [];
    }

    add(q) {
        return new Promise((resolve, reject) => {
            if (q instanceof Question) {
                if (q.id == undefined
                    || q.description == undefined
                    || q.a == undefined
                    || q.b == undefined
                    || q.c == undefined
                    || q.d == undefined
                    || q.answer == undefined
                )
                    reject("Invalid Question");
                else {
                    if (this.questions.find(function (current) {
                        return q.id == current.id
                    }) != undefined)
                        reject("Duplicate Question");
                    this.questions.push(q);
                    resolve();
                }
            } else
                reject("Invalid Question");
        })
    }

    list() {
        return new Promise((resolve, reject) => {
            this.questions.forEach(function (question) {
                question.print();
            })
            resolve();
        });
    }

    evaluate(id, option) {
        return new Promise((resolve, reject) => {
            let question = this.questions.find(function (q) {
                return q.id == id;
            })
            if (question && question.answer == option)
                resolve(true);
            else
                resolve(false);
        });
    }
}

export default QuestionBank;