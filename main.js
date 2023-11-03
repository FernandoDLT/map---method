// Define a custom map() method for arrays
Array.prototype.myMap = function (callback) {
   const resultArray = []
   for (let i = 0; i < this.length; i++) {
      resultArray.push(callback(this[i], i, this))
   }
   return resultArray
}
// Example 1: Squaring each element in an array 
const originalArray = [1, 2, 3, 4, 5];
const squaredArray = originalArray.myMap((x) => x * x);
console.log(squaredArray); // Output: [2, 4, 6, 8, 10]

// Example 2: Doubling each element in an array
const numbers = [2, 4, 6, 8, 10]
const doubleNumbers = numbers.myMap((x) => x * 2)
console.log(doubleNumbers)