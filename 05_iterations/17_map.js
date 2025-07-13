const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//add 10 in each numbers
//1.map return values itself if scope is not opened if opend then use return keyword
// const newnums=mynumbers.map((num) => num + 10)
// console.log(newnums);


//chaining-using multiple methods at once
const newnums = mynumbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num)=>num>=40)
console.log(newnums);    



