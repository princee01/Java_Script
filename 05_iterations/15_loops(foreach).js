//1.for each loop

const coding = ["js", "c", "java", "python", "ruby"]
// function inside foreach is callback fun therefore it has no name
coding.forEach(function (item) {    
    //console.log(item);
})
 
//2.arrow fun
coding.forEach((item) => { 
    //console.log(item);
})

//3. passing fun as argument in foreach
// function printme(item) {
//     console.log(item);
// }
// coding.forEach(printme);//passing reference of printme

//4. multiple parameter in foreach
// coding.forEach((item,index,arr) => {
//       console.log(item, index, arr);//op: js 0 [ 'js', 'c', 'java', 'python', 'ruby' ]etc
// })

//5.loops on array of objects
const mycoding = [
    {
        languagename: "javascript",
        langaugefilename:"js"
    },
    {
        languagename: "java",
        langaugefilename:"java"
    },
    {
        languagename: "python",
        langaugefilename:"py"
    }
]
mycoding.forEach((item)=>{
   //console.log(item.languagename); 
})
//op
// javascript
// java
// python

