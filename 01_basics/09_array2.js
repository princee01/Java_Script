const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//1.push():Appends new elements to the end of an array, and returns the new length of the array.
//marvel_heros.push(dc_heros)
//console.log(dc_heros)//[ 'superman', 'flash', 'batman' ]//element=3
//console.log(marvel_heros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]//element=4

//2.concat():Combines two or more arrays. This method returns a new array without modifying any existing arrays.
//marvel_heros.concat(dc_heros)
//console.log(marvel_heros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//const all_heros = marvel_heros.concat(dc_heros);
//console.log(all_heros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//3.spread(...):mostly time we use it to concate two array elements
const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//4.flat:Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
//console.log(real_another_array)//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//5.from():Creates an array from an iterable object.
console.log(Array.isArray("hitesh"));//false means this array do not exist
console.log(Array.from("hitesh"));//[ 'h', 'i', 't', 'e', 's', 'h' ]//convert into string
console.log(Array.from({ name: "hitesh" }));//output:[]//beacause,we have to mention ,hume keys ka array banana h ya kiska?,intresting question for interview

//6.of():Returns a new array from a set of elements.
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));//[ 100, 200, 300 ]



