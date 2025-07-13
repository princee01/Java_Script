//Why Use bind()?
//1.To avoid losing the context of this in callbacks or event listeners.
//2.To create reusable functions with pre-defined arguments.

//ex1.
// const person={
//     name: "prince",
//     greet: function () {
//         console.log(`hello sir, my name is ${this.name}`);
        
//     }
// }
// //const greet = person.greet  //-->output will be (hello sir, my name is undefined)
// const greet = person.greet.bind(person);//hello sir, my name is prince
// greet();

//ex2.
//With the bind() method, an object can borrow a method from another object.
//The example below creates 2 objects (person and member).
//The member object borrows the fullname method from the person object:
// const person = {
//     firstname: "prince",
//     lastname: "kumar",
//     fullname: function () {
//         return this.firstname + " " + this.lastname;
//     }
// }
// const member = {
//     firstname:"ravi",
//     lastname: "singh"
// }

// const fullname = person.fullname.bind(member);
// console.log(fullname());//ravi singh

//ex3.
//When a function is used as a callback, this is lost.
//This example will try to display the person name after 3 seconds, but it will display undefined instead:

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     display: function () {
//       console.log(this.firstName + " " + this.lastName);
//     }
//   }
  
// console.log(setTimeout(person.display, 3000));//undefined
  
//or
const person = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      console.log(this.firstName + " " + this.lastName);
    }
  }
  
  let display = person.display.bind(person);
  setTimeout(display, 3000);//John Doe



  

