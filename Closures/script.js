// # Closures

// A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). When you create a closure, you gain access to an outer function’s scope from an inner function. Closures are automatically created every time a function is defined in JavaScript.

// var username = 'kalpesh';

// function displayName(){
//     console.log(username)
// }
// displayName()

// will print kalpesh because this fucntion has access to global variable

// function displayName(){
//     var username = 'kalpesh';

// }
// console.log(username)
// displayName()
// Now we cant access the variable because it in local scope'

// function subscribe(){
//     var name = 'kalpesh'

//     function displayName(){
//         alert(name);
//     }
//     displayName()
// }

// This will alert the name kalpesh

// Scope chaining
// var e = 10
// function sum(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return a+b+c+d+e
//             }
//         }

//     }
// }
// console.log(sum(1)(2)(3)(4))

// output 20


// Question:What will be logged to console

// let count = 0
// (function printCount(){
//     if(count == 0){
//         let count = 0
//         console.log(count) 
//     }
//     counsole.log(count)
// })();

// count inside count will print 1 because of shadowing
// count inside of function print 0

// Question:Write a function that will allow you to do this

// var addSix = createBase(6);
// addSix(10)
// addSix(21)

// function createBase(num){

// return function(innerNum){
//     return innerNum + num
// }
// }

// Question : Time optimization

// this function will take time as loop will execute everytime the find function is called
// function find(index){
//     let a =[]
//     for(let i = 0; i < 1000000; i++){
//         a[i] = i + I
//     }
//     console.log(a[index])
// }

// console.time("6")
// find(6);
// console.timeEnd('6');
// console.time("12")
// find(50);
// console.timeEnd('12');


// by using closure we are storing the the value of the array so it will store the value in memory
// function find(){
//     let a =[]
//     for(let i = 0; i < 1000000; i++){
//         a[i] = i + I
//     }
//     return function(index){
//         console.log(a[index])
//     }

// }
// const closure = find()
// console.time("6")
// closure(6);
// console.timeEnd('6');
// console.time("12")
// closure(50);
// console.timeEnd('12');


// Question: Block scope with set timeout

// function a() {
//     for(var i = 0; i< 3; i++){
//         setTimeout(function log(){
//             console.log(i)
//         }, i * 1000)
//     }
// }

// a()
// It will print 3 3 3 because var has function scope not block scope to solve this we can use let instead of var

// function a() {
//     for(let i = 0; i< 3; i++){
//         setTimeout(function log(){
//             console.log(i)
//         }, i * 1000)
//     }
// }

// a()

// Quoestion: How would you use closure to create a private counter

// function counter() {
//     var _counter = 0;

//     function add(increment) {
//         _counter += increment; // Corrected from 'counter' to '_counter'
//     }

//     function retrieve() {
//         return 'counter: ' + _counter; // Typo: 'retrive' to 'retrieve'
//     }

//     return {
//         add,
//         retrieve // Typo: 'retrive' to 'retrieve'
//     };
// }

// const c = counter();

// c.add(5);
// c.add(10);
// console.log(c.retrieve()); // Outputs: "counter: 15"


// // Run this function only one using closure

// let view
// function likeTheVideo() {
//     view = "Kalpesh Pawar"
//     console.log('Hire ' + view);
// }

// likeTheVideo()

// // Solution using closure

// let view1
// function likeTheVideo() {
//     let count = 0
//     return function () {
//         if (count > 0) {
//             console.log('Kalpesh Pawar is already hired by Meta')
//         }
//         else {
//             view = "Kalpesh Pawar"
//             console.log('Hire ' + view);
//             count++
//         }
//     }

// }

// let called = likeTheVideo()

// called();
// called();
// called();
// called();
// called();
// called();
// called();

// Polyfill for inbuild once function

// function once(func, context){
//     let ran;

//     return function (){
//         if(func){
//             ran = func.apply(context || this, arguments);
//             func = null
//         }
//         return ran
//     }
// }

// const hello = once((a, b)=> console.log("hello",a , b))

// hello()
// hello()
// hello()
// hello()


// Function to build for memoize polyfill