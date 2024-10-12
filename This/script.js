// "this" keyword in javascript (Implicit Binding)

// Explain 'this' keyboard

// this.a = 5;
// console.log(this.a)
// output:5

// Global Object

// this.a = 5;

// const getParam (){
//     console.log(this.a);
// }

// getParam();
// output: 5

// let user = {
//     name:"Kalpesh",
//     age:24,
//     getDetails(){
//         console.log(this.name)
//     }
// }
// user.getDetails()

// This is no longer targeting the window object its targeting the parent object

// let user = {
//     name:"Kalpesh",
//     age:24,
//     childObj:{
//         newName:"Kalpesh Pawar",
//         getDetails(){
//             console.log(this.newName, "and", this.name)
//         },
//     },
 
// }
// user.childObj.getDetails()
// will get newname but name will be undefined


// With arrow function

// let user = {
//     name:"Kalpesh",
//     age:24,
//     getDetails:() =>{
//         console.log(this.name)
//     }
// }
// user.getDetails()

// This will print nothing becuase this in arrow function point towards global object


// Question 1:What will be the output

// let user = {
//     name:"Kalpesh",
//     age:24,
//     getDetails:() =>{
//         const name = "Pawar"
//         console.log(this.name)
//     }
// }
// user.getDetails()

// This will print Kalpesh


// Question 2 What is the result of accessing it ref?

// function makeUser(){
//     return{
//         name:"John",
//         ref:this
//     };
// }

// let user = makeUser()

// console.log(user.ref.name)
// this will give empty because makeUser() is pointing to window object

// Question 3: How to solve the above problem

// function makeUser(){
//     return{
//         name:"John",
//         ref(){
//         return this.name
//         }
//     };
// }

// let user = makeUser()

// console.log(user.ref())

// Question 4 What will be the output

// const user = {
//     name:'Kalpesh Pawar',
//     logMessage(){
//         console.log(this.name);
//     }
// };

// setTimeout(user.logMessage(), 1000)
// this will give empty or undefined beacuse now log message is a callback and working independently which refrence to global object

// Question 5:how to solve above question

// we can avoid this by using it as a callback and using it an anonyumous function

// const user = {
//     name:'Kalpesh Pawar',
//     logMessage(){
//         console.log(this.name);
//     }
// };

// setTimeout(function() {
//     user.logMessage()
// }, 1000);


// Question 6 :create an object calculator

// let calculator = {
//     read(){
//         this.a = +prompt("a =", 0)
//         this.b = +prompt("b =", 0)
//     },
//     sum(){
//         return this.a + this.b
//     },
//     multi(){
//         return this.a * this.b
//     }
// }

// calculator.read()

// console.log(calculator.sum())
// console.log(calculator.multi())

// Question 7:What will be the output?

// var length = 4;

// function callback(){
//     console.log(this.length)
// }

// const object = {
//     length: 5,
//     method(fn){
//         fn();
//     }
// }

// object.method(callback)

// this will print 4 as fn() is a regular function which refrence to global object