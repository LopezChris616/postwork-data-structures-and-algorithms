function fibonacci(num) {
  // type your code here
  const fibonacci = [];
  for(let i = 0; i <= num; i++) {
    if(fibonacci.length >= 2) {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    } else {
      fibonacci.push(i);
    }
  }
  return fibonacci[fibonacci.length - 1];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("");

  console.log("Expecting: 377");
  console.log("=>", fibonacci(14));

  console.log("");

  console.log("Expecting: 21");
  console.log("=>", fibonacci(8));
}

module.exports = fibonacci;


/*
Rewrite the problem in your own words
  I need to find the nth element of the fibonacci sequence starting from index 0.
  Nth being the number passed as an argument. So if the number is 14
  then the element in the fibonacci sequence should be 377 because the sum of the previous
  two nums in the sequence, 233 and 144, is equal to 377.
*/

/* Please add your pseudocode to this file
  initialize empty array to store all fibo sequence nums
  for loop with nth iterations based on argument
    if arr length is at least 2
      add together sum of previous two nums and push that sum to arr 
    else
      push index into arr
  return last element of arr
*/
