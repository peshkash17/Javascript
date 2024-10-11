// What is function declaration?

// function sum(num) {

// return num + num;
// }

    // What is function expression?

    // function expression are assigned to a variable

// const sum = function (num) {

// return num+num;

// }


// What are first class functions?

// Function can be treated like a variable and passed into another function

// function sqaure(num) {
//     return num * num;
// }

// function displaySqaure(fn){
//     return console.log("sqaure is function", fn(5))
// }

// displaySqaure(sqaure)

// What is IIFE
// Immediately invoked functions

// function sqaure(num) {
//     return num * num;
// }
// sqaure()

// (function sqaure(num) {
//     return num * num;
// })()


// Question on IIFE
// What will be the output

// (function(x){
//     return (function (y){
//         console.log(x);
//     })(2)
// })(1)

// Answer:It will print 1 because inside function has access to its outer environment due to the term called closure



// Question on scope

// for (let i = 0; i < 5; i++){
//     setTimeout(function (){
//         console.log(i)
//     },i * 1000)
// }; 
// for let it will print 0,1,2,3 as let is block scope
// for var it will print 5,5,5,5,5 as var is fucntion scope

// Question on Hoisting

// functionName ()

// function functionName (){
//     console.log('hello');
// }

// This will throw an error because the variable 'greet' is hoisted but not the function expression
// greet(); // TypeError: greet is not a function

// var greet = function() {
//   console.log("Hello, World!");
// };

// Hoisting work diffrently on function it will work even if its called before delaration

// Question what will be the output 
// var x = 21
//  var fun = function (){
//     console.log(x);
//     var x = 20;
//  };
//  fun();
//  Answer it will print undefined beacause of hoisting

// What if callback function

// A callback is a function that is passed as an argument to another function and is executed after some operation or event. In JavaScript, callbacks are often used to handle asynchronous tasks, such as when working with APIs, timers, or handling events.
// function greet(name, callback) {
//     console.log(`Hello, ${name}!`);
//     callback();  // This executes the callback after greeting
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// // Passing `sayGoodbye` as a callback to `greet`
// greet("John", sayGoodbye);


// Arrow functions
// Arrow functions are a more concise way of writing functions in JavaScript, introduced in ES6 (ECMAScript 2015). They are syntactically shorter and behave differently in certain ways compared to regular function expressions and declarations.

// The basic syntax of an arrow function is:

// const functionName = (parameters) => {
//     // Function body
//   };
  
// If the function has only one parameter, you can omit the parentheses:  
// const functionName = parameter => {
//     // Function body
//   };
  
// If the function body has only one expression, you can omit the curly braces and the return statement. The expression will be implicitly returned:

// const add = (a, b) => a + b;

// diffrences
// const obj = {
//     value: 42,
//     regularFunction: function() {
//       return this.value; // 'this' refers to obj
//     },
//     arrowFunction: () => {
//       return this.value; // 'this' refers to the outer scope (typically window in non-strict mode)
//     }
//   };
  
//   console.log(obj.regularFunction()); // 42
//   console.log(obj.arrowFunction());   // undefined (because 'this' refers to the outer scope)

// In this example, the regular function correctly refers to the value property of obj via this, but the arrow function does not because this is lexically inherited and refers to the surrounding (outer) scope, which in this case is the global object (window in browsers).

// No arguments Object

// Arrow functions do not have their own arguments object. If you need to access the arguments in an arrow function, you must use the rest parameter ...args or rely on the arguments object from the outer function.


// function regularFunction() {
//     console.log(arguments); // Logs the arguments passed to the function
//   }
  
//   const arrowFunction = () => {
//     console.log(arguments); // ReferenceError: arguments is not defined
//   };
  
//   regularFunction(1, 2, 3); // Logs: [1, 2, 3]
//   arrowFunction(1, 2, 3);   // Throws an error

// Implicit Return

// Arrow functions allow for concise syntax, especially when a function body contains a single expression. In such cases, you can omit the curly braces and the return keyword, and the expression will be returned implicitly.

// const add = (a, b) => a + b;
// console.log(add(3, 5)); // 8




  