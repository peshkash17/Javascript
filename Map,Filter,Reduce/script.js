// # Map, Filter and Reduce

// What is Map()

// Used to create new array from existing array by applying a function to each element in the array


// const nums = [1,2,3,4]
// const multiplyByThree = nums.map((num, i, arr)=>{
//     return num * 3
// })

// console.log(multiplyByThree)



// What is filter()

// Takes each element in the array and apply a condition to it which will be correct according to the condition will pushed to the output array

// const nums = [1,2,3,4]
// const multiplyByThree = nums.filter((num, i, arr)=>{
//     return num > 2
// })

// console.log(multiplyByThree)



// What is reduce()

// Reduces array of values down to one value

// const nums = [1,2,3,4]
// const sum = nums.reduce((acc,curr,i,arr)=>{

//     return acc+curr
// },0)

// console.log(sum)


// Polyfills of array methods
// polyfill for map


// Array.prototype.myMap = function (cb) {
//     let temp = [];
//    for (let i = 0; i < this.length; i++){
//     temp.push(cb(this[i],i, this));
//    }
//    return temp;
// }


// polyfill for filter

// Array.prototype.myFilter = function (cb) {
//     let temp = []
//     for (let i =0; i < this.length; i++){
// if(cb(this[i],i,this)) {
//     temp.push(this[i])
// }
//     }
//     return temp;
// }


// polyfill for reduce

// Array.prototype.myReduce = function (cb, initialValue) {
//     var accumulator = initialValue

//     for (let i = 0; i< this.length; i++){
//         accumulator = accumulator ? cb(accumulator , this[i], i, this): this[i]
//     }
//     return accumulator;
// }



// interview questions on map,filter reduce

// const students = [
//     {
//         name: "John Doe",
//         rollNumber: "101",
//         marks: 85
//     },
//     {
//         name: "Jane Smith",
//         rollNumber: "102",
//         marks: 92
//     },
//     {
//         name: "Michael Johnson",
//         rollNumber: "103",
//         marks: 78
//     },
//     {
//         name: "Emily Davis",
//         rollNumber: "104",
//         marks: 88
//     },
//     {
//         name: "William Brown",
//         rollNumber: "105",
//         marks: 95
//     }
// ];


//   Question 1:Return name of student in captial

// const nameInCapital = students.map((stud)=>{
//     return stud.name.toLocaleUpperCase()
// })
// console.log(nameInCapital)

// Question 2: Return only details  of those who scored more than 90 marks

// const details = students.filter((stud) => { return stud.marks > 90 })
// console.log(details)

// Questoin 3: Return only details of those whose scored more than 80 and roll no above 103

// const details = students.filter((stu)=>{
//     return stu.marks>80 && stu.rollNumber > 103
// })
// console.log(details)

// Question 4: Return total marks of students

// const total = students.reduce((acc,curr)=>{
// return acc+curr.marks
// },0)
// console.log(total)

// Question 5: Return name of students who scored more than 80 marks

// const studentNames = students.filter((stud)=>{
//     return stud.marks > 80
// }).map((stud)=>{
//     return stud.name
// })

// console.log(studentNames)

// Question 6:Return total marks for student greater than 95 where 10 marks are added to the student who scored less than 90

// const total = students.filter((stud) => {
//     if (stud.marks < 90) {
//         stud.marks += 10
//     }
//     return stud.marks > 90
// }).reduce((acc, curr) => {
//     return acc + curr.marks
// }, 0)

// console.log(total)

// console.log(total)