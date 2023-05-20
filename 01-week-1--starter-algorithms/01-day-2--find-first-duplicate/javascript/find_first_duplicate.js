function findFirstDuplicate(arr) {
  // type your code here
  let arrNums = new Set();
  for(let i = 0; i < arr.length; i++) {
    if(arrNums.has(arr[i])) {
      return arr[i];
    } else {
      arrNums.add(arr[i]);
    }
  }
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("");

  console.log("Expecting: 8");
  console.log("=>", findFirstDuplicate([3, 8, 1, 9, 8, 4, 7, 1]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([2, 6, 1, 7, 4]));
}

module.exports = findFirstDuplicate;


/*
Rewrite the problem in your own words
  Given an array I need to check and return the first value that is duplicated
  So if the array is, [3, 8, 1, 9, 8, 4, 7, 1], it should return 8 because
  the value 8 is in two elements of the arr. It should not return 1 also because
  while it is also duplicating, it is not the first number that is duplicated.
  if the array does not have any duplicate values then it should return -1.
  So if the array is, [2, 6, 1, 7, 4], it should return -1 because there
  are not repeated values
*/

/* Please add your pseudocode to this file
  initialize a new set to keep track of all nums in arr
  loop through array
    if set has num
      return num
    add num to set if num not found
  return -1 if no match found

*/

/* And a written explanation of your solution
    I used a set as a way of keeping track of all the nums encountered
    I then looped through the array checking to see of the num in each
    iteration is a part of the set. if it is, then I simply return the num
    if not then I add that num to the set to check for duplicates in future iterations
    exiting the loop I return -1, since if it reaches that point then there are no
    duplicates in the array
*/