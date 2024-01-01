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
console.log(JsUser.mySym)