//Getter and Setter
//-->ECMAScript 5 (ES5 2009) introduced Getter and Setters.
//-->Getters and setters allow you to define Object Accessors (Computed Properties).



class User{
    constructor(email, password) {
        this.email = email;
        this.password=password
    }
    get email() {
        return this._email.toUpperCase();
    }
    set email(value) {
        this._email = value;
    }
    get password() {
        return `${this._password}hitesh`;
    }
    set password(value) {
        this._password = value
    }
}
const hitesh = new User("prince", "abc");
console.log(hitesh.password);
console.log(hitesh.email);
