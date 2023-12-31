//Dates
// let myDate = new Date();
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate) // date -> object

//Month starts from 0 in javascript when when write in the form of an array 

//let myCreatedDate = new Date(2023,0,23);
//let myCreatedDate = new Date(2023,0,23,5,3);
//let myCreatedDate = new Date("01-14-23"); //mm/dd/yyyy
let myCreatedDate = new Date("2023-01-14"); //yyyy/mm/dd
//console.log(myCreatedDate.toLocaleDateString())

let myTimeStamp = Date.now(); //  returns value in  milliseconds
// console.log(myTimeStamp) // gives values in milliseconds
// console.log(myCreatedDate.getTime())

//converting milliseconds to seconds 

//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // gives months starting from 0

//Customization
newDate.toLocaleString('default',{
    weekday:"long",
})


