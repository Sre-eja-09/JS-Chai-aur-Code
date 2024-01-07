function saymyname(){
    console.log("S")
    console.log("R")
    console.log("E")
    console.log("E")
}
saymyname()
//  function addTwoNumbers(number1,number2){ //parameters
//        console.log(number1+number2)
//  }
function addTwoNumbers(number1,number2){ //parameters
    // let result = number1+number2
   // console.log(number1+number2)
    return number1+number2
    
}
//addTwoNumbers(1,2) //arguments
const result = addTwoNumbers(2,3)
//console.log("result:",result) //undefined , but why?

function loginUser(username){
   return `${username} just loggedin`
}
console.log(loginUser("Sreeja"))
