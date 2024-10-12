// Objects in Javascript

// const user = {
//     name: "Roadside coder",
//     age:24
// }
// // accessing a value
// console.log(user.name)
// console.log(user[name])

// Question 1: What will be the output

// const func = (function(a){
//     delete a;
//     return a;
// })(5)

// console.log(func)

// Answer: 5 as a is local variable

//Question 2: How to intreate over an object

// const user = {
//     name: "Roadside Coder",
//     age: 24,
//     isTotallAwesome: true,
// }

// for(key in user){
//     console.log(key)
//     // to access keys
//     console.log(user[key])
//     // to access keys values
// }

// Question 3:What the output

// const obj = {
//     a: 'one',
//     b: 'two',
//     a: 'three'
// }
// answer first two value will be printed because only first value will beconsidered in case of same key

// Question 4: Create a function multiplyByTwo(obj) that multiply all numeric property values of nums by 2
// let nums = {
//     a:100,
//     b:200,
//     title:"My nums",
// }
// multiplyByTwo(nums)

// function multiplyByTwo(obj){
//     for(key in obj){
//         if(typeof obj[key]=== "number"){
//             obj[key] *= 2;
//         }
//     }
// }
// console.log(nums)

// Question 5: Whats the output of the following code

// const a = {};
// const b = {key:"b"};
// const c = {key:"c"};

// a[b] = 123;
// a[c] = 456;
// a[object object] this will look like this obejct will be not assign as key unless its an string
// so at first a value become 123 then a value will become 456 because of overlapping


// console.log(a)

// Question 6: What is JSON.stringify and JSON.parse

// const user = {
//     name: "Roadside coder",
//     age:24
// }
// const strObj = JSON.stringify(user)
// console.log(strObj)
// console.log(JSON.parse(strObj)
// )

// We use this when we set values in local storage because we cannot store directly an object in local storage so we have to convert it to string

// Question 7 whats the output

// console.log([..."Kalpesh"])
// will spread all the words

// Question 8 whats the output

// const obj = {
//     name: "Kalpesh",
//     age:24
// }
// const obj2 = {
//     admin: true,
//     ...obj
// }

// console.log(obj2)

// Question: 9 Whats the output

// const settings = {
//     username: "Kalpesh",
//     level: 30,
//     health:90,
// }

// const data = JSON.stringify(settings, ["health", "level"])

// console.log(data)

// It will only stringfy health and level property

// Question 10: Whats the output

// const shape = {
//     radiue: 10,
//     diameter(){
//         return this.radius * 2;
//     },
//     permiter: () => 2 * Math.PI * this.radius,
// }

// console.log(shape.diameter)
// console.log(shape.permiter)

// diameter will be 20
// permiter will give Nan as in arrow function this refers to globale object

// Question 11: What is destrcutring in objects

// let user = {
//     name:"Kalpesh",
//     age:24,
//     fullName:{
//        first:"Kalpesh", 
//        Last:"Pawar" 
//     }
// }

// taking out specific property of object

// const {name:Name}  = user
// console.log(Name)


// Nested Destructering

// const {fullName:{first}} = user

// console.log(first)

// Question 12: whats shallow copy and deep copy


// When one objects holds refrence of another object then it called shallow copy
// let original = {
//     a: 1,
//     b: 2,
//     c: { d: 3 }
//   };
  
//   let shallowCopy = { ...original }; // Shallow copy
  
//   shallowCopy.a = 10; // This only changes the copied object's 'a'
//   shallowCopy.c.d = 20; // This changes both the original and copied objects' 'c.d'
  
//   console.log(original); // { a: 1, b: 2, c: { d: 20 } }
//   console.log(shallowCopy); // { a: 10, b: 2, c: { d: 20 } }

//A deep copy, on the other hand, duplicates not just the object, but all nested objects and arrays as well, creating a completely independent copy. Any changes made to the deep copy will not affect the original object, and vice versa.

// let original = {
//     a: 1,
//     b: 2,
//     c: { d: 3 }
//   };
  
//   // Deep copy using structured cloning (e.g., JSON)
//   let deepCopy = JSON.parse(JSON.stringify(original));
  
//   deepCopy.a = 10; // Changes only the copied object
//   deepCopy.c.d = 20; // Changes only the copied object's nested object
  
//   console.log(original); // { a: 1, b: 2, c: { d: 3 } }
//   console.log(deepCopy); // { a: 10, b: 2, c: { d: 20 } }
  

  
