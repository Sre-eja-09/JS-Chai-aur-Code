const tinderUser={} //non-singleton 
//const tinderUser= new Object(); //singleton object
tinderUser.id="123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn=false;
//console.log(tinderUser)
//Multi layer nesting in objects
const regularUser={
    email:"sreeja@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Sreeja",
            lastname:"Prakash"
        }
    },
    isLoggedIn :"false"
}
//console.log(regularUser.fullname.firstname)
const obj1 = {1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
//const obj3 = {obj1,obj2}
//const obj3 =Object.assign({},obj1,obj2)//target,source
//we can also use the spread function
const obj4={...obj1,...obj2}
//console.log(obj4);

// we can get the objects and values 
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) //returns arrays of arrays
console.log(tinderUser.hasOwnProperty('isLoggedIn'))
