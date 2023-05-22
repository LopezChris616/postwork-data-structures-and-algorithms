function selectionSort(arr) {
  // type your code here
  for(let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if(minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [1, 2, 4, 9, 14, 17, 20]");
  console.log("=>", selectionSort([9, 2, 17, 20, 4, 1, 14]));

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;


/*
Rewrite the problem in your own words
  I need to sort an array of numbers using selection sort
  Selection sort means to sort by getting the smallest value of
  the array and placing that value into its appropiate spot in the sorted arr
  so if the arr is, [9, 2, 17, 20, 4, 1, 14], then the sorted arr should be, [1, 2, 4, 9, 14, 17, 20]
*/

/* 
Please add your pseudocode to this file
init var with value of first element of arr
  loop through arr
    init var for the min index of the unsorted part of the arr
    inner loop to compare i to i + 1
      if arr[i + 1] is < arr[minIndex var]
        set minIndex var to i + 1
    if minIndex var is not equal to 1
      swap positions in arr of arr[i] and arr[minIndex var]
return arr
*/
