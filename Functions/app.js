'use strict';
console.log('up and running');

// // ### Exercise 1
// // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// function max(num1, num2){
//     if(num1 > num2){
//         return num1;
//     }else{
//          return num2;
//     }
// }

// // ### Exercise 2
// // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// function maxOfThree(a, b, c){
//     if(a > b && a > c){
//         return a;
//     }else if(b > a && b > c){
//         return b;
//     }else{
//         return c;
//     }
// }

// // ### Exercise 3
// // Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// function isVowel(a){
//     if(a === 'a' || a === 'e' || a === 'i' || a === 'o' || a === 'u'){
//         return true;
//     }else{
//         return false;
//     }
// }

// // ### Exercise 4 
// // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// function sum(arr){
//     let added = 0;
//     for(let i=0; i<arr.length; i++){
//         added += arr[i];
//     }
//     return added;
// }
// function multiply(arr){
//     let multiplied = 1;
//     for(let i=0; i<arr.length; i++){
//         multiplied *= arr[i];
//     }
//     return multiplied;
// }

// // ### Exercise 5 
// // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// function reverse(str){
//     //instead of adding all characters to array, iterating through that array and reversing each letter in each word manually, then putting it back together and printing it out like i was planning, i can literally just chain the 3 methods together and get the same results
//     return str.split("").reverse().join("");
// }

// // ### Stretch Goal Exercise 1
// // Write a function `lengths` that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
// //  ["hello", "what", "is", "up", "dude"]; => [5, 4, 2, 2, 4]
// function lengths(arr){
//     let arrOfNums = [];
//     for(let i=0; i<arr.length; i++){
//         arrOfNums.push(arr[i].length);
//     }
//     return arrOfNums;
// }

// ## Stetch Goal Exercise 2
// Turn all functions you have written into arrow functions [click here for info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
// // ### Exercise 1
// let max = (num1, num2) =>{
//     if(num1 > num2){
//         return num1;
//     }else{
//          return num2;
//     }
// }

// // ### Exercise 2
// let maxOfThree = (a, b, c) =>{
//     if(a > b && a > c){
//         return a;
//     }else if(b > a && b > c){
//         return b;
//     }else{
//         return c;
//     }
// }

// // ### Exercise 3
// let isVowel = (a) =>{
//     if(a === 'a' || a === 'e' || a === 'i' || a === 'o' || a === 'u'){
//         return true;
//     }else{
//         return false;
//     }
// }

// // ### Exercise 4
// let sum = (arr) =>{
//     let added = 0;
//     for(let i=0; i<arr.length; i++){
//         added += arr[i];
//     }
//     return added;
// }
// let multiply = (arr) =>{
//     let multiplied = 1;
//     for(let i=0; i<arr.length; i++){
//         multiplied *= arr[i];
//     }
//     return multiplied;
// }

// // ### Exercise 5 
// let reverse = (str) => str.split("").reverse().join("");

// // ### Stretch Goal Exercise 1
// let lengths = (arr) =>{
//     let arrOfNums = [];
//     for(let i=0; i<arr.length; i++){
//         arrOfNums.push(arr[i].length);
//     }
//     return arrOfNums;
// }