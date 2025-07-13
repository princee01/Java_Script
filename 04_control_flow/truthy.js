const email = "prince@119";//it is a true value
if (email) {
    console.log("got user email");  
} else {
    console.log("dont have email");
    //if email="" empty then this will print.
}

//falsy value:
//false, 0, -0,BigInt 0n, "", NULL, undefined, NaN

//Truthy values:
// "0", 'false', " ", [], {}, function(){},
const Uemail = "";
if (Uemail.length === 0) {
    console.log("array is empty");
}
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
    
}

//nullish coalescing operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10;
val1 = undefined ?? 15;
console.log(val1);

//terniary operator

//condition ? true:false
const iceteaprice = 100;
iceteaprice<=80 ? console.log("less than 80"):console.log("more than 80");
;


