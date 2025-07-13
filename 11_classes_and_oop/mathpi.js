
// console.log(Math.PI);//3.14...
// Math.PI = 5;
// console.log(Math.PI);//3.14


const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
//console.log(descripter);
//output
/*{
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
  }*/

// object declaration
//1.
const mynewobj = Object.create(null);
//console.log(mynewobj)

//2.
const chai = {
    name: "ginger",
    price: "250",
    isAvailable: true,
    
    orderchai: function () {
        console.log("chai nahi bani")
    }
}
//console.log(chai);//undefined

//how to set its decripter property---------------

//console.log(Object.getOwnPropertyDescriptor(chai, "name"))
/* output:
{
  value: 'ginger',
  writable: true,
  enumerable: true,
  configurable: true
}
 */
// Object.defineProperty(chai, "name", {
//     writable: false,
//     enumerable:false   // if we make it true then name will not print in loop we used below
// })
// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

/*output:
{
  value: 'ginger',
  writable: false,
  enumerable: false,
  configurable: true
}
*/

//how to iterate over a object
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key},${value}`);
    }
}
/*output:
name,ginger
price,250
isAvailable,true */




