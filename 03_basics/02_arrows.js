const user ={
    username:"Hitesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to this course`);
        console.log(this)
    }
}
//welcomeMessage("Sam")
//this keyword is used for objects and cannot be used for functions