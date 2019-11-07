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

export default Question;