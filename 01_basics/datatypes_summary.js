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
//++++++++++++++++++++++++++++++++
//Stack (primitive datatypes , uses copy of elements) , Heap (Non-Primitive datatypes, uses reference of elements)
let youtubeChannelName = "sreejadotcom"
let anotherName = youtubeChannelName
anotherName = "ChaiaurCode" // copy m change hua h toh reflect hoga original value change nhi hogi

console.log(youtubeChannelName)
console.log(anotherName)
//Non Primitive Datatypes , Reference 
let userOne = {
    email:"googledotcom",
    upi: "user@ybl"
}
let userTwo = userOne;
userTwo.email = "sreejadotcom" //(userOne and userTwo dono ke emails change ho jayenge as value here is passed by reference in case of non primitive datatypes)
console.log(userOne.email)
console.log(userTwo.email)
