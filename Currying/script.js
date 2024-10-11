// // // // currying
// // // Currying is a functional programming technique where a function with multiple arguments is transformed into a series of functions, each taking a single argument.

// // // Instead of taking all arguments at once, the curried function takes the first argument, returns a new function that takes the next argument, and so on until all arguments are provided. The final function then returns the result.

// // // In simpler terms, currying breaks down a function that takes multiple parameters into a chain of functions that each take one parameter.

// // // Question 1: sum(2)(6)(1)

// // // function sum(a){
// // //     return function(b){
// // //         return function (c){
// // //             return console.log(a+b+c)
// // //         }
// // //     }
// // // }

// // // sum(2)(6)(1)

// // // Question 2-
// // // evaluate('sum')(4)(2) => 6
// // // evaluate('multiply')(4)(2) => 8
// // // evaluate('divide')(4)(2) => 2
// // // evaluate('substract')(4)(2) => 2

// // // function evaluate(string) {
// // //     return function (a) {
       
// // //         return function (b) {
           
// // //             switch (string) {
// // //                 case 'sum':
// // //                     return console.log('sum',a + b) ;
// // //                     break;
// // //                 case 'multiply':
// // //                     return console.log("multiply",a * b);
// // //                     break;
// // //                 case 'divide':
// // //                     return console.log("divide",a % b);
// // //                     break;
// // //                 case 'substract':
// // //                     return console.log("substract",a - b);
// // //                     break;

// // //                 default:
// // //                     break;
// // //             }
// // //         }
// // //     }
// // // }
// // // evaluate('sum')(4)(2)
// // // evaluate('multiply')(4)(2)
// // // evaluate('divide')(4)(2)
// // // evaluate('substract')(4)(2)


// // // // Question 3 Infinite currying ->   sum(4)(2).....(n)

// // // function sum(a){
// // //     return function(b){
// // //         if(b) return sum(a+b);
// // //         return a
// // //     }
// // // }


// // // Question 4 Currying  vs partial application

// // Currying transforms a function that takes multiple arguments into a sequence of functions, each taking a single argument. A curried function keeps returning new functions until it has received all the arguments it needs.
// function currySum(a) {
//     return function (b) {
//       return function (c) {
//         return a + b + c;
//       };
//     };
//   }
  
//   console.log(currySum(1)(2)(3));

//   Partial application refers to the process of fixing a few arguments of a function, producing another function that takes the remaining arguments. Unlike currying, partial application allows you to provide some arguments initially and then call the resulting function with the remaining ones.

// A partially applied function
// function partialSum(a, b, c) {
//     return a + b + c;
//   }
  
//   const add5 = partialSum.bind(null, 5); // Partially applying the first argument
//   console.log(add5(3, 2)); // Output: 10
  

// // Quoestion Manipulating DOM

// function updateDomElement(id){
//  return function(content){
//     document.querySelector('#' + id).textContent = content
//  }
// }

// const updateHeading = updateDomElement('kp')
// updateHeading('Hello coder')


// Question: Curry() function implementation 

// convert f(a,b,c) into f(a)(b)(c)

// function curry(func) {
//     return function curriedFunc(...args){
//         if(args.length>= func.length){
//             return func(...args)
//         }else{
//             return function(...next){
//                 return curriedFunc(...args, ...next)
//             }
//         }
//     }
// }

// const sum = (a,b,c,d) => a + b + c + d
// const totaSum = curry(sum)

// console.log(totaSum(1)(2)(3)(4))