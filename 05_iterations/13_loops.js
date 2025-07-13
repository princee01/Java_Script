//for of

// strings in arr["", "", ""]
// objects in arr [{},{},{}]

const arr = [1, 2, 3, 4, 5];

for (const i of arr) {
    //console.log(i);
}

const greetings = "hello world"
for (const num of greetings) {
    //console.log(`each char is: ${num} `);
}

//maps object- are collection of key-value pair.(unique values and ordered)

const map = new Map()
map.set('IN', "India")
map.set('USA', "United state america")
map.set('FR', "France")

//console.log(map);

for (const [key, value] of map) {
    //console.log(key, ":-", value);
}

//loop on object - object is not iteratable like this..
const myobj = {
    'Game1': 'NFS',
    'Game2': 'spiderman'
}
// for (const [key, value] of myobj) {
//     console.log(key, ":-", value);
// }


