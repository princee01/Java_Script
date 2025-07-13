//----------------------------------------numbers---------------------------------------------------------------------------------------------
const score = 400;
//console.log(typeof score);//number , but js detect it automatically

const balance = new Number(100);//here we explicitly defined that it is number type
// console.log(balance);//[number:100]
// console.log(balance.toString().length);//balance is converted into string and then we used length property to find its length
// console.log(balance.toFixed(2));//for precision value

const othernumber = 23.8966
//console.log(othernumber.toPrecision(4));//23.9 it round of the value upto 4 digits

const hundreds = 1000000;
//console.log(hundreds.toLocaleString('en-IN'));


//------------------------------------------maths----------------------------------------------------------------------------------------------
//console.log(Math);//go to google->inspect->console for more detail

// console.log(Math.abs(-4));//4 neg will convert into positive
// console.log(Math.round(4.3));//4
// console.log(Math.ceil(4.3));//5 //if digit after point exists then will print greater value to 4 which is 5
// console.log(Math.floor(4.9));//print lowest value //4
// console.log(Math.min(4, 3, 6, 8));//3
// console.log(Math.max(4, 3, 6, 8));
// console.log(Math.random());//value always btw 0 and 1
// console.log(Math.floor(Math.random() * 10 + 1));//ans btw 1-9//value will shift to left ,we have take +1 
// because atleat 1 should be answer and floor will give lowest value

const min = 10;
const max = 20;

//console.log(Math.floor(Math.random() * (max - min + 1) + min))//now atleat 10 will be output.
 
