Please create an HTML and Javascript file to complete the exercises.
DO NOT write the  exercise solutions in this file. thx! :)


Answer the questions below, then complete the exercises

- Question 1 
    What is an array in JS?
    * Looks like this => [], can hold any time of data type, multiple data types, any info you need to group together that you need to access later

- Question 2
In your own words, why do we use arrays in Javascript
  * Ease of access, instead of declaring individual variables that stand for a bunch of differnt items, you can make an array, put everything inside, and reference your data from the array

- Question 3
In your own words, when should we use an array?
  * Its easy. You can iterate through one to get your information, there are many methods you can use witht it

- Question 4
 What are 3 kinds of array methods, and how do we use them?
  * .length, returns the length of the array, ex: myArray.length returns the length of myArray
  * .push, adds item to end of array, ex: myArray.push('banana'); adds the string 'banana' as the last item of myArray
  * .toString, returns array items as a string instead of array; ex: myArray.toString returns 'banana' instead of ['banana']

 - Question 5
 What ar two examples of higher order Array methods? 
  * array.prototype.map(), tracks every item in the array and returns a new array; ex: let myOtherArray = myArray.map(arrayItem => arrayItem + 's') returns ['bananas']
  * array.prototype.filter(), creates new array that keeps the results of the previous array if it passes the boolean given ex: thisArray = [45, 73, 98, 12] let thisOtherArray = thisArray.filter(arrayItem => arrayItem <= 70), would return [45, 12] 


#### Exercise 1
1. Create an array.
2. Add four names to the array.
3. Print the array one entry at a time.

#### Exercise 2
1. Create an array with 5 numbers in it.
2. Print the numbers one entry at a time.

#### Exercise 3
1. Create an array with 4 names.
2. Print the third item in the array.
3. Delete the second item.
4. Print the third item in the array again.


### Exercise 4 
Create the array [5,3,7, 4]. Pass the array to a new function to do the following:

Print the array.
Print the 3rd element of the numberList.
Delete the second element.
Print the 3rd index element.


## NOTE: Below are exercise that require knowlede of Higher Order Array Methods. Watch the attached video to gain more understanding of how to use these methods:

[8 must know Array Methods](https://www.youtube.com/watch?v=R8rmfD9Y5-c&t=153s)



### Exercise 5 

Given an array of integers, use the 'map' method to create a new array in which the double of each integer in the first array is stored, and log it to the console.

[477, 8914, 40461, 599148]; => [954, 17828, 80922, 1198296]


### Exercise 6

Given an array of singular nouns, use the map function create a new array that stores the plural noun of each of the words in the first array, and log it to the console (assume that the singular nouns can be made plural by adding a 's').

[ 'pen', 'book', 'code' ] => ['pens', 'books', 'codes']


### Exercise 7 

Given an array of costs of different products, use the filter function to create a new array with the costs from the input array if the cost is <= $350, and print it to the console.


[390, 190, 311.85, 67, 19048, 5000, 670] => [190, 311.85, 67]



### Exercise 8


Given an array of objects with the city name and population, use the filter funciton to create an array with objects from the first array if the population of that particular city is >= 5 million.

[
  { "name": "Shanghai", "population": 24300000 },
  { "name": "Los Angeles", "population": 3792621 },
  { "name": "New Delhi", "population": 21800000 },
  { "name": "Mumbai", "population": 18400000 },
  { "name": "Chicago", "population": 2695598 },
  { "name": "Houston", "population": 2100263 },
];



### Exercise 9 

(i) Given an array of numbers, find the sum of every element in the array, and log it to the console.

[1, 2, 3, 4, 5] =>  15


### Exercise 10 

Given an array of numbers, find the average of them, and log it to the console.

[1, 2, 3, 456, 108115, 45909.15154, 1988.1545, 145e8] => 1812519559.288255

