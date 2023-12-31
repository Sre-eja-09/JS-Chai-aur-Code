const score = 400
const balance = new Number(100)
// console.log(balance)
// console.log(balance.toString().length) // the type of balance is now changed to string and we can now apply the properties of strings
// console.log(balance.toFixed(2)) //decimal upto 2

// const otherNumber = 1123.89
// console.log(otherNumber.toPrecision(3)); // this function takes in numbers in the range 1 - 21 and converts the given number to a string with that precision

// const hundreds =1000000
// console.log(hundreds.toLocaleString('en-IN')) // converts the given number according to indian standards



///++++++++++++++++++++Maths++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.33)) // it has uooer and lower round functionality as well like the ceil and floor
// console.log(Math.floor(4.6)) // lower lower limit
// console.log(Math.ceil(4.2)) //higher upper limit
// console.log(Math.min(3,5,6,7))
// console.log(Math.max(7,5,3,4))
console.log(Math.random()); //returns a random value between 0 and 1
console.log((Math.random()*10)+ 1)
console.log(Math.floor(Math.random()*10)+ 1)
//Important
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min+1))+min)

