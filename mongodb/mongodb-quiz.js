db.subjects.drop();
db.mongodb_questions.drop();
db.users.drop();
db.quiz.drop();
db.subjects.insertMany([{
	sid: 123,
	name: 'MongoDB',
	questionbank: 'mongodb_questions',
	date: new Date()
}, {
	sid: 234,
	name: 'Java',
	questionbank: 'java_questions',
	date: new Date()	
}]);
db.mongodb_questions.insertMany([{
	qid: 1,
	question: "What is equivalant of a record in MongoDB?",
	a: "Document",
	b: "Collection",
	c: "Field",
	d: "Table",
	answer: "a",
	level: 1,
	date: new Date(),
	type: "single",
	author: "krishna@glarimy.com"
}, {
	qid: 2,
	question: "Which of the following gets prioroty in MongoDB database design?",
	a: "Consistency",
	b: "Performance",
	c: "Disk Optimisation",
	d: "Query interface",
	answer: "b",
	level: 1,
	date: new Date(),
	type: "single",
	author: "krishna@glarimy.com"
}]);
db.users.insertMany([{
	uid: 12,
	name: "Koyya",
	tests: []
}]);
db.quiz.insertOne({
	tid: 1234,
	subject: "MongoDB",
	creator: "HR",
	date: new Date(),
	questions: []
});

var mongoquestions = db.mongodb_questions.find({"level": 1});

while(mongoquestions.hasNext()){
db.quiz.update(
	{tid: 1234},
	{
		"$push": {"questions": mongoquestions.next()}
	}
);
};

db.subjects.find().pretty();