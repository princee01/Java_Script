const mynums = [1, 2, 3, 4]

const mytotal = mynums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
}, 0//it tell acc where to start
)
console.log(mytotal)

// output:
// acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3
// acc: 6 and currval: 4
// 10

//2. using arrow function
// const mytotal = mynums.reduce((acc, currval) => acc + currval, 0)
// console.log(mytotal);//10

//3.
// const shoppingcart = [
//     {
//         itemname: "js course",
//         price:2999
//     },
//     {
//         itemname: "c course",
//         price:999
//     },
//     {
//         itemname: "mobile",
//         price:10999
//     }
// ]
// //add price in shopping cart.
// const pricetopay=shoppingcart.reduce((acc,item)=>acc+item.price,0)
// console.log(pricetopay);//14997