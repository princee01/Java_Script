const name = "prince";
const repocount = 50;

//-------------------old style---------------------
//console.log(name+repocount+" value");

//-------mordern way:string interpolation----------
console.log(`hello my name is ${name} and my repo count is ${repocount}`);

//string declaration
const gameName = new String('princee');
// console.log(gameName)
//########## methods of string #######################

// console.log(typeof gameName)//object
// console.log(gameName[0]);//p
// console.log(gameName.__proto__);//{}
// console.log(gameName.length)//7
// console.log(gameName.toUpperCase());//PRINCEE/here original value does not changed
// console.log(gameName.charAt(4));//c
//console.log(gameName.indexOf('c'));//4

const newstring = gameName.substring(0, 4);
//console.log(newstring);//prin

//in slice we can give neg. values it will print reverse string
const anotherstring = gameName.slice(-6, 4);
//console.log(anotherstring);//rin

const newstring1 = "   hitesh   ";
//console.log(newstring1);//it will print with spaces
//console.log(newstring1.trim());//print withoud spaces

const url = "https://prince.com/prince%20upadhyay";
console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'));//it check that sundar is present in url or not if not then give false else true

const username = "prince-upadhyay";
console.log(username.split('-'));//it will split string on basis of -


