//Immediately Invoked Function Expressions(IIFE)

//syntax:
//()():first onw is for function definition and second for exectution.
//1.this is named iife
(function chai() {
    console.log(`DB connected`);
})();
    //output:DB connected
    //use: global scope k pollution se problem hoti h kai baar to us global scope k
    //jo bhi variables h ya jo bhi chije decleared h uske pollution ko hatane k liye iife a use kiya

//2.unnamed iife
( (name) =>{
    console.log(`DB CONNECTED TWO ${name}`)
})("prince")  
//output: DB CONNECTED TWO prince