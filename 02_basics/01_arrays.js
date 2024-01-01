//Arrays
//array's copy operation creates shallow copy.All the in-built copy operations with any javascript objects create shallow copies instead of deep copies 
//Shallow copies are the copies which share the same reference point
// arrays are heterogeneous collections of elements of any type
const myArr = [0,1,2,3,4]
//console.log(myArr[0])
const myArr2 = new Array(1,2,3,4)
//arrays methods push , pop , shift , unshift
myArr.shift();
myArr.unshift(9);

//includes
//console.log(myArr.includes(9)); 
//indexOf
//console.log(myArr.indexOf(9));

const newArray =myArr.join();
//console.log(newArray) //9,1,2,3,4 string datatype 
//console.log(myArr)   // [9,1,2,3,4]
//console.log(typeof newArray)
console.log("A",myArr);
const myn1 = myArr.slice(1,3); // slices and returns values at index 1 ,2 and not 3
console.log(myn1)

console.log("B",myArr);
const myn2 = myArr.splice(1,3); // splice includes the upper and lower ranges as well and returns o/p acc
console.log("C",myArr) // original array is changed after using splice and it contains only the elements that were not spliced
console.log(myn2)

