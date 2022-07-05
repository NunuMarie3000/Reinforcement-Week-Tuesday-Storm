'use strict';
console.log('up and running');

// // #### Exercise 1
// // 1. Create an array.
// let myArray = [];
// // 2. Add four names to the array.
// myArray.push('john', 'jacob', 'jingleheimer', 'schmidt');
// // 3. Print the array one entry at a time.
// for(let i=0; i<myArray.length; i++){
//     console.log(myArray[i]);
// }

// // #### Exercise 2
// // 1. Create an array with 5 numbers in it.
// let numArray = [25, 23, 19, 11, 10];
// // 2. Print the numbers one entry at a time.
// for(let i=0; i<numArray.length; i++){
//     console.log(numArray[i]);
// }

// // #### Exercise 3
// // 1. Create an array with 4 names.
// let nameArray = ['john', 'jacob', 'jingleheimer', 'schmidt'];
// // 2. Print the third item in the array.
// console.log(nameArray[2]);
// // 3. Delete the second item.
// nameArray.splice(1, 1);
// // 4. Print the third item in the array again.
// console.log(nameArray[2]);

// // ### Exercise 4 
// // Create the array [5,3,7, 4]. Pass the array to a new function to do the following:
// let newArray = [5, 3, 7, 4];
// function arrayFun (arr){
// // Print the array.
// console.log(arr);
// // Print the 3rd element of the numberList.
// console.log(arr[2]);
// // Delete the second element.
// arr.splice(1, 1);
// // Print the 3rd index element.
// console.log(arr[2]);
// }
// arrayFun(newArray);

// // ### Exercise 5 
// // Given an array of integers, use the 'map' method to create a new array in which the double of each integer in the first array is stored, and log it to the console.
// // [477, 8914, 40461, 599148]; => [954, 17828, 80922, 1198296]
// let numberArray = [477, 8914, 40461, 599148];
// let doubledNumberArray = numberArray.map(num => num * 2);
// console.log(doubledNumberArray);

// // ### Exercise 6
// // Given an array of singular nouns, use the map function create a new array that stores the plural noun of each of the words in the first array, and log it to the console (assume that the singular nouns can be made plural by adding a 's').
// // [ 'pen', 'book', 'code' ] => ['pens', 'books', 'codes']
// let wordArray = [ 'pen', 'book', 'code'];
// let wordsArray = wordArray.map(word => word + 's');
// console.log(wordsArray);

// // ### Exercise 7 
// // Given an array of costs of different products, use the filter function to create a new array with the costs from the input array if the cost is <= $350, and print it to the console.
// // [390, 190, 311.85, 67, 19048, 5000, 670] => [190, 311.85, 67]
// let costArray = [390, 190, 311.85, 67, 19048, 5000, 670];
// let bigCostArray = costArray.filter(bigCost => bigCost <= 350);
// console.log(bigCostArray);

// // ### Exercise 8
// // Given an array of objects with the city name and population, use the filter funciton to create an array with objects from the first array if the population of that particular city is >= 5 million.
// // [
// //   { "name": "Shanghai", "population": 24300000 },
// //   { "name": "Los Angeles", "population": 3792621 },
// //   { "name": "New Delhi", "population": 21800000 },
// //   { "name": "Mumbai", "population": 18400000 },
// //   { "name": "Chicago", "population": 2695598 },
// //   { "name": "Houston", "population": 2100263 },
// // ];
// let objArray = [
//     { "name": "Shanghai", "population": 24300000 },
//     { "name": "Los Angeles", "population": 3792621 },
//     { "name": "New Delhi", "population": 21800000 },
//     { "name": "Mumbai", "population": 18400000 },
//     { "name": "Chicago", "population": 2695598 },
//     { "name": "Houston", "population": 2100263 },
// ];
// let objPopArray = objArray.filter(item => item.population >= 5000000);
// console.log(objPopArray);

// // ### Exercise 9 
// // (i) Given an array of numbers, find the sum of every element in the array, and log it to the console.
// // [1, 2, 3, 4, 5] =>  15
// let noSumNumArray = [1, 2, 3, 4, 5];
// let sumOfSumNumArray = noSumNumArray.reduce((sum, num) => {
//     return sum + num;
// });
// console.log(sumOfSumNumArray);

// // ### Exercise 10 
// // Given an array of numbers, find the average of them, and log it to the console.
// // [1, 2, 3, 456, 108115, 45909.15154, 1988.1545, 145e8] => 1812519559.288255
// let arrayOfNums = [1, 2, 3, 456, 108115, 45909.15154, 1988.1545, 145e8];
// let productOfArrayOfNums = arrayOfNums.reduce((product, num) => {
//     return (num * product)/arrayOfNums.length;
// });
// console.log(productOfArrayOfNums);