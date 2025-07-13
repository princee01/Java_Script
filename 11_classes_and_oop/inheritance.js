class user{
    constructor(username) {
        this.username = username;
    }
    logme() {
        console.log(`username is ${this.username}`);
        
    }
}

class Teacher extends user{
    constructor(username, email, password) {
        super(username);     //using super keyword we do not need to call above class's this
        this.email = email;
        this.password = password;
    }
    addCourses() {
        console.log(` a new course was added by ${this.usename}`);
    }
}

const chai = new Teacher("chai", "chai@gmail.com");
chai.addCourses();
chai.logme();
const tea = new user("prince");
tea.logme();

console.log(chai instanceof user)//true;
