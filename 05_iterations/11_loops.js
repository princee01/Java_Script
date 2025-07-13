
/*
JavaScript supports different kinds of loops:

for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true

*/
//for
// for (let i = 0; i < 10; i++){
//     console.log("hello");
// }

//or
// let i = 0;
// for (; i < 10; ){
//     console.log("hello");
//     i++;
// }
//-----------------------using var keyword-----------------------------------
var j = 5;
for (; j < 10; j++){
    //console.log(j);
}
//console.log("value of j becomes:", j);
//note:In the first example, using var, the variable declared in the loop redeclares the variable outside the loop.

//In the second example, using let, the variable declared in the loop does not redeclare the variable outside the loop.

//When let is used to declare the i variable in a loop, the i variable will only be visible within the loop.


//-----------------------------------------------------------------------------
for (let i = 0; i <= 10; i++){
    //console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(i + '*' + j + '=' + i * j);
    }
}

let myarr = ["flash", "batman", "superhero"];
for (let i = 0; i < myarr.length; i++) {
    const element = myarr[i];
    //console.log(element);
}

//break and continue
for (let i = 1; i <= 20; i++) {
    // if (i == 5) {
    //     console.log("detected 5");
    //     break;
    // }
    if (i == 5) {
        console.log("detected 5");
        continue;
    }
    console.log(`value of i is ${i}`);


}