// //let score = "33abv"; //when we print this value it will be NaN not a number but its type would be string and after coverting into number it becomes of type number
// //let score = null; when we print this value it will be 0 and type is object and after converting it into number the type becomes number
// //let score = undefined; //when we print this value it will be NaN not a number but its type would be undefined and after coverting into number it becomes of type number
// let score = true; //when we print this value it will be 1 for true and 0 for false but its type would be boolean and on conversion to number the type becomes number
// console.log(typeof score);
// console.log(typeof(score));

// //conversion
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// //let isLoggedIn =1;//true
// //let isLoggedIn ="";//empty strings gives false
// let isLoggedIn ="Sreeja"; //any string value will give true
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// let someNumber = 33;
// let stringNumber =String(someNumber);
// console.log(someNumber);
// console.log(typeof stringNumber);

// **************Operations***************
let value =3;
let negValue = -value;
//console.log(negValue);

// console.log(1+"2");
// console.log("1"+2);
// console.log("1"+2+2);//here the first number is a string hence all the other numbers are also treated as strings
// console.log(1+2+"2");//here the first number is a number hence the first 2 numbers are added and the last number is string which is concatenated
console.log(+true); // 1
console.log(+""); //0