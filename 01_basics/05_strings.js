const name = "sreeja"
const repoCount = 50

console.log(name+repoCount +"Value");

//Backticks are used for string interpolation 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// String declaration Another method
const gameName = new String('sreee-eee-jaa')
// console.log(gameName) //it becomes of the type object with key value pair of index and the value at that index and a length property available with it 
// console.log(gameName[0]) // we can access the value at every index
// console.log(gameName.__proto__) // {} -> object
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t')); // t is nowhere present in our string hence ot will return -1
// const newString = gameName.substring(0,4) // index 0 is included but index 4 is not included (index cannot be negative in substring method)
// console.log(newString);

// const anotherString = gameName.slice(-8,-4); //allows the use of negative indices as well
// console.log(anotherString);

// const newStringOne = "  Sreeja  "
// console.log(newStringOne);
// console.log(newStringOne.trim());// trimes the white spaces before and after the actual string

const url = "https://sreejadot%20com";
console.log(url.replace('%20','-'));
console.log(url.includes('sreeja'));

console.log(gameName.split('-'));
