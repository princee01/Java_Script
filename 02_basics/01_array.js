//Array->
//object,collection of multiple items under single variable
//js array is resizable,and can store diffrent type of data
//0-based indexing
//array copy operation create (shallow copy)->a shallow copy of an
//object is a copy whose property shares the same
//reference.(changes reflect in original array)

const myarr = [2, 3, 5, 7, 9];
console.log(myarr[0]);//2

const myheros = ["shaktiman", "naagraj"];
console.log(myheros);

const myarr2 = new Array(1, 2, 3, 4);
console.log(myarr2);//[1,2,3,4]

//Array methods

myarr.push(6);
console.log(myarr);//[ 2, 3, 5, 7, 9, 6 ]

myarr.pop();
console.log(myarr);//[ 2, 3, 5, 7, 9]

myarr.unshift(9);
console.log(myarr);//[ 9, 2, 3, 5, 7, 9 ]

myarr.shift();
console.log(myarr);//[ 2, 3, 5, 7, 9 ]

console.log(myarr.includes(9));//true
console.log(myarr.indexOf(19));//-1

const newArr = myarr.join();
console.log(myarr);//[ 2, 3, 5, 7, 9 ]//it is an array
console.log(newArr);//2,3,5,7,9//it converted into string
console.log(typeof newArr);//string

//*slice,splice

console.log("A ", myarr);

//slice()-> non destructive , donot modify original array
const myn1 = myarr.slice(1, 3);
console.log("B ", myarr);
console.log(myn1);
//splice() ->destructive,modify the original array 
const myn2 = myarr.splice(1, 3);
console.log("c ", myarr);
console.log(myn2);
//output
/* 
A  [ 2, 3, 5, 7, 9 ]
B  [ 2, 3, 5, 7, 9 ]
[ 3, 5 ]
c  [ 2, 9 ]
[ 3, 5, 7 ]
  */
 