//loops for object
const myobject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift:'swift by apple'
}

// for (const key in myobject) {
//     console.log(key);            //will print all keys
// }
// for (const key in myobject) {
//     console.log(myobject[key]);     //print all values       
// }
for (const key in myobject) {
    //console.log(`${key} shortcut is for ${myobject[key]}`);     //print all key-values       
}


//ques does for in work on arr

const arr = ["js", "ruby", "c++", "java", "python"];
// for (const key in arr) {
//     console.log(key); // print index
// }
for (const key in arr) {
    //console.log(arr[key]); // print values
}

//for in on map

const map = new Map()
map.set('IN', "India")
map.set('USA', "United state america")
map.set('FR', "France")

for (const key in map) {
    //console.log(key); // not possible -map is not iteratable.   
}


//summary
//objects- forin
//array- forof

//forof
// for (const element of object) {
    
// }
//forin
// for (const key in object) {
    
    
// }