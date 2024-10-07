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