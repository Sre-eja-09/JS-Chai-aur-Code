//Immediately Invoked Function Expression (IIFE) 1) to call the immediately defined function 2) to solve the problem caused by population by Global variables
// function chai(){
//     console.log(`DB connected`);
// }
// chai()
(function chai(){ //named IIFE
    console.log(`DB connected`);
}) () ;//we need to put the whole function into parenthesis in order to call it by just using ()

//()() //for function definition , for function definition

(() => {
    console.log(`DB connected`);  //IIFE works with arrow functions as well
}) ();// we use ; to end the IIFE here otherwise the compiler will not know when to stop the execution of this context so to stop we use ;
((name)=>{
    console.log(`DB connected to ${name}`)
})("Sreeja")