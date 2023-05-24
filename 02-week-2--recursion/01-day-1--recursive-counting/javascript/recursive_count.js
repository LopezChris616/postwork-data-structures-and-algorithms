function recursiveCount(num = 0) {
  // type your code here
  if(num > 8) {
    console.log(num);
  } else {
    console.log(num);
    recursiveCount(num + 1);
  }
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
