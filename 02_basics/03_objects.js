//singleton
//object literals
//object helps us to create key-value pairs
const JsUser = {
    name:"Sreeja",
    age:18,
    location:"Delhi",
    email:"sreejaattheratedotcom",
    mySym:"mykey1",
    "full Name":"Sreeja Prakash", //now this property of the object cannot be accessed with . it can only be accessed by [""]
    isLoggedIn:false,
    lastLoginDay:["Monday","Saturday"]
}
//accessing the methods of the objects
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full Name"])
//console.log(JsUser.full Name) //this will throw error as discussed above

const mySym = Symbol("key1") 
console.log(JsUser[mySym]) // when we have to keep the data type as symbol we use square brackets
JsUser.email = "sreeja@chatgpt.com"//the values can be overwritten like this 
//but if you want to freeze the values of the object we can use the freeze function 
//Object.freeze(JsUser);
JsUser.email="sreeja@1234.com"//this cannot be overwritten now as it has been freezed
console.log(JsUser.email);
JsUser.greeting = function(){
    console.log("Hello JSUser")
}
console.log(JsUser.greeting); 
