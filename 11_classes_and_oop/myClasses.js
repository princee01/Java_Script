//ES6

//1.
// class User{
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword() {
//         return `${this.password}abc`;
//     }
//     changeUserName() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("princek", "chai@gmail.com", 9910);
// //console.log(chai);
// //console.log(chai.encryptPassword());//9910abc
// console.log(chai.changeUserName());

//or--------------------------------------------------------------------------

//2. behind the scene
//this behave as object thats why prototype is used 
function User(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`;
}
User.prototype.changeUserName = function () {
    return `${this.username.toUpperCase()}`
}
const tea = new User("princek", "chai@gmail.com", 9910);
console.log(tea.encryptPassword());
console.log(tea.changeUserName());


