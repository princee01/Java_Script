// function sayname() {
//     console.log("p");
//     console.log("r");
//     console.log("i");
//     console.log("n");
//     console.log("c");
//     console.log("e");
// }
//sayname()//here function call occure;

//__________________________________________add two numbers______________________________________
// function add2num(num1, num2) {
//     console.log(num1 + num2);
// }


// function add2num(num1, num2) {
//     return num1 + num2;
// }
//or
function add2num(num1, num2) {
    let result = num1 + num2;
    return result;
}
// add2num(5, 6);//11
// add2num(5, "6");//56
// add2num(5, null);//5
const result = add2num(15, 15);
//console.log("result: ", result);//30


function loginusermessage(username) {
    // if (username === undefined) {
    //     console.log("please enter a user name.");
    //     return; 
    // }
    //or
    if (!username) {
        console.log("please enter a user name.");
        return;  
    }
    return `${username} just loggedin`
}
const temp = loginusermessage("prince");
console.log(temp);
//________________________________________________________________________________________________________________

//rest operator(...):
// function calculatecartprice(...num1) {
//     return num1;
// }
// console.log(calculatecartprice(200, 400));//[200,400];

function calculatecartprice(value1,value2,...num1) {
    return num1;
}
//console.log(calculatecartprice(200, 400, 600, 7000));//[ 600, 7000 ]


//passing a object in function......
const user = {
    username: "prince",
    price:99
}
function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleobject(user); or we can pass a object by creating it
//or
handleobject({
    username: "ram",
    price:100
})

//passing array to a function.......
const arr = [200, 400, 100, 600];
function returnsecondvalue(getarr){
    return getarr[1];
}
//console.log(returnsecondvalue(arr));//400

//

