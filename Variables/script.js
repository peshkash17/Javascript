// Varibales

// Var
// Let
// Const


// What is Scope

// ##certain region of of program where a variable can exist or recognised


// function abc(){
//     //this is called function scope
// }

// {
//     //this i called block scope
// }


// What is Shadowing

// function test(){
//     var a = "hello"
//     let b = "hi"

//     if(true){
//         let a ='hi'
//         var b = "Goodbye"
//         console.log(a);
//         console.log(b)
//     }
// }

// test();

// Basically you redeclare var varibale with using let but you cannot redaclare let variable with var this is called shadowing



// Initialization

// var a; will work
// let a; will work
// const a; will give Missing initializer in const declaration


// Reinitialization

// var a = 5
// a= 10
// this will work

// let a = 5
// a = 10
// this will also work

// const a = 5
// a = 10
// this will give assignment to constant variable error


// Hoisting 

// During creation phase javascript engine moves your variable and function declaration on the top of your code

// console.log(a)
// var a = 5

// this will give undefined not an error a javascript will move the variable on the top and it will be undfined


// console.log(a)
// let a = 5
// this will give cannot access error before intialization as it goes in temporal dead zone


// same for const

// **A temporal dead zone (TDZ) is the block where a variable is inaccessible until the moment the computer initializes it with a value. A block can be defined as a pair of braces ({...}) used to accumulate multiple statements. Initialization occurs when one assigns an initial value to a variable.**

