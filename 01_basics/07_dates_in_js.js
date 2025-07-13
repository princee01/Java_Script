//Dates

let mydate = new Date()
console.log(mydate.toString());//Fri Apr 04 2025 07:11:43 GMT+0530 (India Standard Time)
console.log(mydate.toDateString());//Fri Apr 04 2025
console.log(mydate.toTimeString())//07:12:13 GMT+0530 (India Standard Time)
console.log(mydate.toLocaleString())//4/4/2025, 7:13:12 am
console.log(typeof mydate)//obejct*

// let mycreateddate = new Date(2025, 0, 23);
// console.log(mycreateddate.toDateString());//Thu Jan 23 2025
//in js months starts from 0.

// let mycreateddate = new Date(2025, 0, 23, 5, 3);
//console.log(mycreateddate.toLocaleString());//23/1/2025, 5:03:00 am

let mycreateddate = new Date("04-04-2025");
console.log(mycreateddate.toLocaleString());//4/4/2025, 12:00:00 am

let mytimestamp = Date.now();
console.log(mytimestamp);//1743731667072
console.log(mycreateddate.getTime());//1743705000000 vlues in miliseconds
console.log(Date.now())//output in milsec.
console.log(Math.floor(Date.now() / 1000));//1743731802 value in seconds.

let newdate = new Date();
console.log(newdate);
console.log(newdate.getMonth());//3 which is april beacuse month start from 0.
//or console.log(newdate.getMonth()+1);//4
console.log(newdate.getDay());//5 which is friday
console.log(`${newdate.getDay()}`)//5
console.log(newdate.toLocaleString('default', {
    weekday: "long",
    
}))//friday.

