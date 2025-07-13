//if
const isuserloggedin = true;
const temperature = 41;

if (temperature < 50) {
    //console.log("less than 50.")
}
if (isuserloggedin) {
    //console.log("executed");
} 
//<, >, <=, >=, ==, !=, ===(check type too)
if (2 === "2"){
    //console.log("executed");//no output bcz condition is false
}
//-----------------------------------------------------------------------------
const score = 200;
if (score > 100) {
    const power = "fly";
    //console.log(`user power: ${power}`);
}
//console.log(`user power: ${power}`);//op:power is not defined(use let instead of const )

//---------------------------------------------------------------------------------------------------
const balance = 1000;
//if(balance>500) console.log("test");

//---------------------------------------------------------------------------------------------------
//nesting
// if (balance < 500) {
//     console.log("less than");
    
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else if (balance < 1200) {
//     console.log("less than 1200");
// }

//-----------------------------------------------------------------------------------------------------
const userloggedin = true;
const debitcard = true;
const userloggedinfromgoogle = false;
const userloggedinfromemail = true;

if (userloggedin && debitcard && 2==2) {
    console.log("Allow to buy courses ");
}
if (userloggedinfromemail || userloggedinfromgoogle) {
    console.log("user logged in");
}