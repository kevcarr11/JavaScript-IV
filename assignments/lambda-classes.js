// CODE here for your Lambda Classes

// Base //

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    };
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    };
};

// Extensions

class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    };
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    };
    grade(student, subject) {
        console.log(`${student} receives a perfect score on ${subject}`);
    };
    // Stretch Method //
    
    adjustGrade(student) {
        let points = Math.round(Math.random() * 100);
        if (student.grade >= 100) {
            student.grade -= points;
            console.log(`${points} points are subtracted from ${student.name}'s grade. ${student.name}'s current grade is ${student.grade}`);
        } else {
            student.grade += points;
            console.log(`${points} points are added to ${student.name}'s grade. ${student.name}'s current grade is ${student.grade}`);
        };
    };
};

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
        this.grade = studentAttrs.grade;
    };
    listsSubjects() {
        this.favSubjects.forEach(element => {
            console.log(element);
        });
    };
    prAssignment(student, subject) {
        console.log(`${student} has submitted a PR for ${subject}`);
    };
    sprintChallenge(student, subject) {
        console.log(`${student} has begun sprint challenge on ${subject}`);
    };
    // Stretch Method 

    graduate() {
        if (this.grade >= 70) {
            console.log(`${this.name} has graduated with a final grade of ${this.grade}!`); 
        } else {
            let diff = 70 - this.grade;
            this.grade += diff;
            console.log(`After more grading, ${diff} points were earned and ${this.name} has graduated with a final grade of ${this.grade}!`);
        };
    };
};

class TeamLead extends Instructor {
    constructor(teamLeadsAttrs) {
        super(teamLeadsAttrs);
        this.gradClassName = teamLeadsAttrs.gradClassName;
        this.favInstructor = teamLeadsAttrs.favInstructor; 
    };
    standup(name, channel) {
        console.log(`${name} announces to ${channel}, @channel stand-by time!`);    
    };
    debugsCode(name, student, subject) {
        console.log(`${name} debugs ${student}'s code on ${subject}`);
    };
};

// Objects //

const keiran = new Instructor({
    name: 'Keiran',
    location: 'Canada',
    age: 29,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const kevin = new Student ({
    name: 'Kevin',
    age: 26,
    location: 'Stowell, TX',
    previousBackground: 'Construction',
    className: 'Webpt8',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    grade: 100,
});

const chris = new TeamLead ({
    name: 'Chris',
    location: 'Sarasota',
    age: 32,
    favLanguage: 'React',
    specialty: 'Back-end',
    catchPhrase: 'Wanna zoom it out?',
    gradClassName: 'WebPt8',
    favInstructor: 'Dan',
});

// Consoles Test 

kevin.speak();
keiran.demo('JavaScript');
keiran.grade('Kevin', 'JavaScript');
kevin.listsSubjects();
kevin.prAssignment('Kevin', 'JavaScript');
kevin.sprintChallenge('Kevin','JavaScript');
chris.standup('Chris', 'WebPt8_chris');
chris.debugsCode('Chris', 'Kevin','JavaScript');
console.log(chris.catchPhrase);
// Stretch logs 
chris.adjustGrade(kevin);
kevin.graduate();
