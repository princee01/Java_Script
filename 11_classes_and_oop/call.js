function setusername(username){
    this.username = username;
}

function createuser(username, email, password) {
    //setusername(username);//not called
    setusername.call(this,username)//we are passing this of createuser function to another function

    this.email = email;
    this.password=password
}

const chai = new createuser("chai", "chai.com", 123);
console.log(chai);
//op-createuser { username: 'chai', email: 'chai.com', password: 123 }
