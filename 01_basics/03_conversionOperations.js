// let score = 33; //number
// let score = "33"; // string
// let score = "33abc"; //NaN
// let score = null; //0
//let score = undefined; //NaN

console.log(typeof score);

let valueInNumber = Number(score)
//console.log(valueInNumber)
//console.log(typeof valueInNumber)

// "33" => 33
// "33abc" => NaN
// "true" => 1; false => 0

/*--------------------------------------------------------------------------------------------------------------*/
//let isloggedin = 1; // values other than 0 gives true after conversion in bool
// let isloggedin = ""; //false
let isloggedin = "prince"; //true

let booleanisloggedin = Boolean(isloggedin);
//console.log(booleanisloggedin);
/*--------------------------------------------------------------------------------------------------------------*/

let somenumber = 33;
let stringnumber = String(somenumber);
// console.log(stringnumber);
// console.log(typeof stringnumber);


//################################################################Operations###################################//

let value = 3
let negValue = -value;
//console.log(negValue) //-3

//basic operations
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 2);
// console.log(2 % 2);

let string1 = "prince";
let string2 = " kumar";
//console.log(string1 + string2); //prince kumar

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32
// console.log(true); //true
// console.log(+true); //1
// console.log(+""); //0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gamecounter = 100;
++gamecounter;
//console.log(gamecounter);//101

let x = 3;
let y = ++x;
console.log(x, y); // 4 4 // value of x first increment and then assign in y

let a = 3;
let b = a++;
console.log(a, b); //4 3 // value of a first assigned in b then increment



