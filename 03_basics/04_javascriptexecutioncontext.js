//{} -> Global execution context refered to by this keyword and the global environment is different in case of browser console and node env
//Javascript is single-threaded language
//1)Global Execution Context , 2)Functional Execution Context , 3)Eval Execution Context
//{}-> Memory Creation phase
//  -> Execution Phase
//Example:
let val1=10
let val2=5
function addNum(num1,num2){
    let total =num1+num2
    return total
}
let result1=addNum(val1,val2)
let result2=addNum(10,5)
// Steps for javascript code execution
//1) Global Execution -> allocated by using this keyword
//2)Memory Phase -> gathering all the variables and keeping them
// for the given example in this phase:
//val1->undefined , val2-> undefined , addnum -> definition , result1-> undefined , result2-> undefined
//3)Execution Phase ; val1<-10 , val2<-5 , 
//jitni baar function call hota hai utni baar ye new executional context bnta hai
//addnum ->new variable environment + execution thread



