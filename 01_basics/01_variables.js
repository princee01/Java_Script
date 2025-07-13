//1.value written in constant cant be changed one written
/*
2.var:
-->This is the oldest keyword for variable declaration in JavaScript.
-->Variables declared with var are function-scoped or globally-scoped.
 This means they are accessible throughout the function in which they are declared, 
 or globally if declared outside any function.
-->var allows for redeclaration and updating of a variable's value.
*/
//3.let
//-->let is block scoped
const accoundId = 14253
let accountEmail = "prince@998"
var accountPassword = "1234"
accountCity = "jaipur"
let accountstate; //undefined value
/*prefer not to use var
because of issue in block scope and functional scope
*/


// accoundId = 2 //not allowed
accountEmail = "raju@998"
accountPassword = "8"
accountCity = "faridabad"

console.log(accoundId);
console.table([accoundId,accountEmail,accountPassword,accountCity,accountstate])

