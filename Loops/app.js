// Unless stated otherwise, your code should go _only_ inside the anonymous function below.
(function () {
  const apples = [1, 3, 5, 7, 9];
  const bakers = [9, 0, 3, 8, 4, 2, 6, 1, 7, 5];
  const cards = [
    1, 0, 8, 14, 10, 6, 4, 22, 15, 24, 15, 13, 13, 5, 0, 25, 21, 24, 24, 17, 4,
    19, 15, 19, 9,
  ];
  const dogs = [
    29, 29, 17, 23, 23, 29, 17, 29, 17, 29, 23, 29, 23, 23, 29, 29, 23, 23, 17,
    23, 29, 29, 23, 29, 17,
  ];
  const eggs = [81, 75, 75, 81, 32, 75, 81, 75, 81];

  // 1. Show array apples.
  console.log(apples);

  // 2. Show how many elements are in array apples.
  console.log(`Elements in array apples: ${apples.length}`);

  // 3. Calculate the sum of the numbers in array apples.
  console.log(`Sum of numbers in array apples: ${apples.reduce((sum, num) => {
    return (sum + num);
})}`);

  // show the final result
  //??? What????

  // 4. Show array bakers.
  console.log(bakers);

  // 5. Calculate the sum of the numbers in array bakers.
  console.log(`Sum of numbers in array bakers: ${bakers.reduce((sum, num) => {
    return (sum + num);
})}`);

  // show the final result

  // 6a. Calculate the sum of the numbers in the even indices of array bakers.
  let evenIndexSum = 0;
  //iterates through bakers array, printing every even indexed number, starting with index 0, going up
  for(let i=0; i<bakers.length; i = i+2){
    evenIndexSum += bakers[i];
  }
  console.log(evenIndexSum);

  // show the final result

  // 6b. Calculate the sum of the even numbers in array bakers.
  let evenSum = 0;
  for(let i=1; i<bakers.length; i = i+2){
    evenSum += bakers[i];
  }
  console.log(evenSum);

  // show the final result

  // 7. Show array cards.
  console.log(cards);

  // 8. Determine *if* 15 is in array cards, and display the answer.
  // Note: There _is_ a built-in array.includes method to do this.
  //       Usually, you will use that method. But for this
  //       exercise, write it with a loop.
  for(let i=0; i<cards.length; i++){
    if(cards[i] === 15){
      console.log(cards[i]);
    }
  }
  // Usual way to find if an array has some value, such as 15.
  // show the final result
  let yesFifteen = cards.filter(card => card === 15);
  console.log(`The number 15 was on ${yesFifteen.length} different cards`);

  // 9. Determine *where* 15 first appears in array cards.
  // Note: There _is_ a built-in array.indexOf method to do this.
  //       Usually, you will use that method. But for this
  //       exercise, write it with a loop.
  for(let i=0; i<cards.length; i++){
    if(cards[i] === 15){
      //[i] - 1 so its the actual number and not the index value
      console.log(`Number 15 first appears on card number ${[i] - 1}`);
      break;
    }
  }
  // Usual way to find the index of some value, such as 15:
  console.log(cards.indexOf(15));
  // show the final result

  // 10. How many times does 15 appear in array cards?
  let howManyTimesDoesFifteenAppear = cards.filter(card => card === 15);
  console.log(`The number 15 appears ${howManyTimesDoesFifteenAppear.length} different times`);
  // show the final result

  // 11. How many times does 0, 4 any 13 appear in array cards?
  let zeroFourThirteen = cards.filter(card => card === 0 || card === 4 || card === 13);
  console.log(`0, 4, and 13 together show up ${zeroFourThirteen.length} times`);

  // show the final result

  // 12. Which positions in array cards hold a 15?
  positionsOfFifteen = [];
  //set variable where first index of 15 is located
  let firstIndex = cards.indexOf(15);
  //add 1 to firstIndex b/c second param of indexOf is index number where we wanna begin search, we wanna start looking after the first instance
  let secondIndex = cards.indexOf(15, (firstIndex +1));
  let thirdIndex = cards.indexOf(15, (secondIndex +1));
  positionsOfFifteen.push(firstIndex, secondIndex, thirdIndex);
  console.log(`These positions in array cards hold a 15: ${positionsOfFifteen}`);


  // show the final result

  // 13. How many numbers are in array cards are even?
  let evenCardNumbers = cards.filter(card => {
    //using arrow function to check each item in cards array
    //using remainder operator, check if card value's remainder after being divided by 2 is 0 or not
    //add all even numbers to array
    return card % 2 === 0;
  })
  console.log(`There are ${evenCardNumbers.length} even numbers in array cards`);

  // show the final result

  // 14. Show array dogs.
  console.log(dogs);

  // 15. How large is array dogs?
  console.log(`The Dogs array has ${dogs.length} items in it`);

  // 16. Calculate whether there are more than 8 29s in array dogs.
  let twentyNines = dogs.filter(dog => dog === 29);
  if(twentyNines.length > 8){
    console.log(`There are more than 8 29s in array dogs. There are ${twentyNines.length}`);
  }else{
    console.log('There are less than 8 29s in array dogs');
  }

  // 17. Calculate whether there are more than 20 17s and 23s combined.
  let total = dogs.filter(dog => dog === 17 || dog === 23);
  if(total.length > 20){
    console.log(`There are more than 20 17s and 23s combined. There are ${total.length}`);
  }else{
    console.log(`There are less than 20 17s and 23s combined. There are ${total.length}`);
  }

  // 18. Calculate how many 29s are in array dogs.
  console.log(`There are ${twentyNines.length} 29s in array dogs`);

  // 19. Calculate how many 23s and 17s combined are in array dogs.
  console.log(`There are ${total.length} 23s and 17s combined in array dogs`);

  // YOU CAN STOP HERE -- July 5th, 2022
  // 20. Show array eggs.
  console.log(eggs);

  // 21. How large is array eggs?
  console.log(`Array eggs is ${eggs.length} items long`);

  // 22. How many 32s are in array eggs?
  let thirtyTwo = eggs.filter(egg => egg === 32);
  console.log(`There's ${thirtyTwo.length} 32s in array eggs`);

  // 23. Does array eggs have only 75s and 81s?

 
})();

// Stretch Goal Exercise 1 

// Timer Challenge:

// Use the event timer function to animate the included sprite images of 'guy' images (in guy folder).
//  Start with an initial image of guy1.png then every .5 second (500 ms) 
//  update the image to the next one in sequence. Once you reach image guy9.png 
//  start over with the guy1.png image.
