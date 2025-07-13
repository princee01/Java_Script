//closure->
/*
A closure in JavaScript is a powerful concept where a function "remembers" 
the variables from its lexical scope even when the function is executed 
outside that scope. Closures are created every time a function is defined, 
allowing it to access its outer function's variables.
 */

//lexical scope->
/*
Definition: Lexical scope refers to the scope determined at the time
of writing the code, based on where variables and functions are declared. 
It defines how variable access is resolved in nested functions.
Key Idea: Inner functions have access to variables declared in their 
outer functions (and the global scope), but not vice versa.
*/

function outer(){
    let outervar = "i am from outer";
    function inner() {
        console.log(outer);//accessible due to lexical scope
    }
    inner();
}
outer();