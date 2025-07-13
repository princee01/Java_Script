const user = {
    username: "hitesh",
    logincount: 8,
    signedin: true,
    
    getuserdetails: function () {
        //console.log("got user details from db");
        //console.log(`username: ${this.username}`);
        console.log(this);//it will print entire object
    }
}
//console.log(user.username);
//console.log(user.getuserdetails());
//console.log(this);//{} bcz there is nothing in global context for now

//constructor--------------------
function User(username, logincount, isloggedin) {
    this.username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin;

    this.greeting = function () {
        console.log(`welcom ${this.username}`);
    }

    return this;//implicitly defined but yet we will write
}

const userone =new User("hitesh", 12, true);
const usertwo=new User("prince",16,true)
console.log(userone)
//console.log(usertwo)
//in this scenario data are overrited after create another user so use new keyword

//constructor function har baar naya instance deta h

