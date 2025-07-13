// singleton:
//jo bhi hum literals ki tarah declare krte h usse singleton nhi banta h
//and jo bhi constructor se banta h usse singleton banta h

// Object literals:
//key value pair.

//create a symbol
const mysym = Symbol("key1");

const Jsuser = {
    name: "prince",//bydefault system understand name as string("name") and on place of value we can write any number, string etc
    "full name":"prince upadhyay",//we cant access it with dot(.)
    // mysym: "mykey1",//react as string
    [mysym]:"mykey1",//to use it as symbol we have to write in[].//correct syntex
    age: 21,
    location: "noida",
    email: "prince@123.gmail",
    isloggedin: false,
    lastlogindays:["monday","saturday",]
}
//how to access objects

//1.normal way:
//console.log(Jsuser.email);//prince@123.gmail
//console.log(Jsuser.full name);// it will show error

//2.good way:
//console.log(Jsuser["email"]);//prince@123.gmail
//console.log(Jsuser["full name"])//prince upadhyay
//console.log(typeof Jsuser.mysym);//this of string type because it is not used as symbol
//console.log(Jsuser[mysym]);//mykey1

Jsuser.email = "prince@99107";
//freeze():Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

//Object.freeze(Jsuser); //i'm commenting this because if we freeze the object greeting function do not work
Jsuser.email = "prince@microsoft.com";
//console.log(Jsuser);
//output:
/*
{
  name: 'prince',
  'full name': 'prince upadhyay',
  age: 21,
  location: 'noida',
  email: 'prince@99107',
  isloggedin: false,
  lastlogindays: [ 'monday', 'saturday' ],
  [Symbol(key1)]: 'mykey1'    //---> it is considered as symbol
}
 */

Jsuser.greeting = function () {
    console.log("hello JS user");
}
Jsuser.greeting2 = function () {
    console.log(`hello JS user, ${this.name}`);
}

console.log(Jsuser.greeting);//[Function (anonymous)]
console.log(Jsuser.greeting());//hello JS user
console.log(Jsuser.greeting2());//hello JS user, prince


//question:
// create a symbol and use it in object ---->solved above 
