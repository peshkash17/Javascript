// Call,Bind and apply in javascript (explicit binding)
// Question-1 What is call?

// var obj={name:"Piyush"};


// function sayHello(age){
//     return "hello" + this.name + "is" + age;
// }

// console.log(sayHello.call(obj,24))

// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
  
//   const person1 = {
//     firstName: "John",
//     lastName: "Doe"
//   };
  
//   const person2 = {
//     firstName: "Jane",
//     lastName: "Smith"
//   };
  
//   // Using call to invoke person.fullName with person1's context
//   console.log(person.fullName.call(person1)); // Output: "John Doe"
  
//   // Using call to invoke person.fullName with person2's context
//   console.log(person.fullName.call(person2)); // Output: "Jane Smith"

// const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + ", " + city + ", " + country;
//     }
//   };
  
//   const person1 = {
//     firstName: "John",
//     lastName: "Doe"
//   };
  
//   // Passing arguments using call
//   console.log(person.fullName.call(person1, "New York", "USA"));
//   // Output: "John Doe, New York, USA"


// The apply() method in JavaScript is similar to call(), but with a key difference in how arguments are passed. It allows you to call a function with a specified this context and pass arguments as an array rather than individuall


// // function.apply(thisArg, [argsArray])
// const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + ", " + city + ", " + country;
//     }
//   };
  
//   const person1 = {
//     firstName: "John",
//     lastName: "Doe"
//   };
  
//   // Passing arguments as an array using apply
//   console.log(person.fullName.apply(person1, ["New York", "USA"]));
//   // Output: "John Doe, New York, USA"
  

// # Bind()

// The `bind()` method in JavaScript creates a **new function** that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments (if any) pre-filled. Unlike `call()` and `apply()`, which invoke the function immediately, `bind()` **does not** invoke the function right away. Instead, it returns a new function that can be invoked later with the specified `this` value and arguments.

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
  
//   const anotherPerson = {
//     firstName: "Jane",
//     lastName: "Smith"
//   };
  
//   const getFullName = person.fullName.bind(anotherPerson);
  
//   console.log(getFullName()); // Output: "Jane Smith"
// The fullName() method originally belongs to the person object.
// By using bind(), we create a new function getFullName that is bound to the anotherPerson object.
// When getFullName() is called, it uses anotherPerson as this, resulting in the output "Jane Smith."


// // Question 1 Output based question

// const person = {name: "Piyush"};

// function sayHi(age){
//     return `${this.name} is ${age}`
// }

// console.log(sayHi.call(person, 24));
// // this will return name and age
// console.log(sayHi.bind(person, 24));
// // this will return a function

// // Question 2 Call wiht function inside object

// const age = 10;

// var person = {
//     name: "Piyush",
//     age: 20,
//     getAge: function () {
//         return this.age;
//     }
// }

// var person2 = {age: 24};
// person.getAge.call(person2);

// this will print 24


// // Question 3 Call printAnimals such that it prints all the animals

// const animals = [
//     {species:"Lion", name:"King"},
//     {species:"Whale", name:"Queen"}
// ]

// function printAnimals(i){
//     this.print = function (){
//         console.log("#" + i + " " + this.species + ": " + this.name)
//     }
//     this.print()
// };

// for(let i = 0; i < animals.length; i++){
//     printAnimals.call(animals[i],i)
// }

// Question 4 - Append an array to another array wihout concat

// const array = ['a','b']

// const elements = [0, 1, 3]

// array.push.apply(array,elements)
// console.log(array)

// // Question 5: Find min and max in an array

// const number = [5,6,3,5,7]

// console.log(Math.max.apply(null,number))
// console.log(Math.min.apply(null,number))



// Polyfill for call,bind,and apply
// // Polyfill for call()
// // The call() method calls a function with a specified this value and individual arguments.

// if (!Function.prototype.myCall) {
//     Function.prototype.myCall = function (context, ...args) {
//       // If context is null or undefined, set it to global object (window in browsers)
//       context = context || globalThis;
  
//       // Create a unique property on the context object to avoid overriding any existing method
//       const fnSymbol = Symbol();
//       context[fnSymbol] = this;
  
//       // Call the function using the context and arguments
//       const result = context[fnSymbol](...args);
  
//       // Delete the temporary property
//       delete context[fnSymbol];
  
//       return result;
//     };
//   }
  
//   // Example usage:
//   function greet(greeting) {
//     console.log(`${greeting}, I am ${this.name}`);
//   }
  
//   const person = { name: 'Alice' };
//   greet.myCall(person, 'Hello'); // Output: "Hello, I am Alice"
  

// // Polyfill for apply()
// // The apply() method is similar to call(), but it takes an array of arguments instead of individual arguments.

// if (!Function.prototype.myApply) {
//     Function.prototype.myApply = function (context, args) {
//       // If context is null or undefined, set it to global object (window in browsers)
//       context = context || globalThis;
  
//       // Create a unique property on the context object to avoid overriding any existing method
//       const fnSymbol = Symbol();
//       context[fnSymbol] = this;
  
//       // Call the function using the context and arguments array
//       const result = context[fnSymbol](...(args || []));
  
//       // Delete the temporary property
//       delete context[fnSymbol];
  
//       return result;
//     };
//   }
  
//   // Example usage:
//   function introduce(age, city) {
//     console.log(`I am ${this.name}, ${age} years old, from ${city}`);
//   }
  
//   const person1 = { name: 'Bob' };
//   introduce.myApply(person1, [25, 'New York']); // Output: "I am Bob, 25 years old, from New York"


// Polyfill for bind()
// The bind() method creates a new function that, when called, has its this value set to the specified value, along with any pre-set arguments.
// if (!Function.prototype.myBind) {
//     Function.prototype.myBind = function (context, ...bindArgs) {
//       const fn = this; // Save reference to the original function
//       return function (...callArgs) {
//         // Combine pre-set arguments (bindArgs) and arguments passed during function call (callArgs)
//         return fn.apply(context, [...bindArgs, ...callArgs]);
//       };
//     };
//   }
  
//   // Example usage:
//   const person2 = { name: 'Charlie' };
  
//   function sayHello(greeting, signOff) {
//     console.log(`${greeting}, I am ${this.name}. ${signOff}`);
//   }
  
//   const sayHelloToCharlie = sayHello.myBind(person2, 'Hello');
//   sayHelloToCharlie('Goodbye!'); // Output: "Hello, I am Charlie. Goodbye!"
  