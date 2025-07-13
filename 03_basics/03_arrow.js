const user = {
    username: "prince",
    price: 999,
    
    welcomessage: function () {
        console.log(`${this.username}, welcome to website`);
        
    }
}
// user.welcomessage();//prince
// user.username = "sam";
// user.welcomessage();//sam
// console.log(this);
//-------------------------------------------------------------------------------------------------------------------
// function chai() {
//     let username = "prince";
//     console.log(this.username);//undefined ,bcz we cant use this in function ,it works only in object
// }
// chai();

//--------------------------------------------------------------------------------------------------------------------

//remove function keyword and user arrow (=>)
const chai = () =>  {
    let username = "prince";
    console.log(this.username);
}
chai();

/*
  
  arrow function:
   syntax:
   () => {}.we can store it in a variable too,
   eg:
*/

// const addtwo=(num1,num2)=>{     //explicit return
//     return num1+num2;
// }
//or
//const addtwo=(num1,num2)=> num1+num2; //implicit return
//or
const addtwo = (num1, num2) => (num1 + num2);//implicit return

console.log(addtwo(10, 20));

