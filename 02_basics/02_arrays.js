const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//push-> pushes in the same array
//marvel_heros.push(dc_heros) // it will not just push the dc_heros elements in the marvel heros but push it as a an array  
//console.log(marvel_heros)//it will produce a nested array array within an array

//concat -> returns a new array

//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros)

// spread or ... fuction is used to for concatenating multiple arrays more than 2 arrays
const all_New_Heroes = [...marvel_heros,...dc_heros]
console.log(all_New_Heroes)

//flat function ->returns a new array with all sub-array elements concatenated into it recursively upto the specific depth
const another_array = [1,2,[3,4],[5,6,[7,8]]]
const real_another_array = another_array.flat(3) //flat(depth)
console.log(real_another_array)

//isArray function returns true or false 
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) //converts a different datatype into an array
console.log(Array.from({name:"hitesh"})) // this cannot be converted directly

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //way to convert into the string

