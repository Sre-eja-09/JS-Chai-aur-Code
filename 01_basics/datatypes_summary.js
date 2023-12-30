//primitive datatypes
// String , Number , Null , Undefined , Boolean ,Symbol ,BigInt
//reference(non primitive) datatypes
//Arrays , Objects , Functions
//JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const heroes = ["shaktiman","nagaraj","doga"];
let myObj ={
    name :"hitesh",
    age:22,
}
const myFunction = function(){
    console.log("Hello World");
}