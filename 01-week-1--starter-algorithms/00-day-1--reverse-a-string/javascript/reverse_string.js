function reverseString(str) {
  // type your code here
  let reversedStr = "";

  for(let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("");

  console.log("Expecting: 'retupmoc'");
  console.log("=>", reverseString("computer"));

  console.log("");

  console.log("Expecting: 'orehrepus'");
  console.log("=>", reverseString("superhero"));
}

module.exports = reverseString;

/* Rewrite the problem in your own words
  I need to take the input, a string, and I need to return it,
  but reversed. For example, if the input is, "computer", then
  I need the function to return "retupmoc". I can't use any 
  JavaScript built-in methods.
*/

/* Please add your pseudocode to this file
  initialize var for reversed string
  loop through str, starting from the end of str
    in every iteration add the current letter of string
    to the reversed str var
  return reversed str var
*/

/* And a written explanation of your solution
  I start with initializing a variable with an empty string
  to be used for the reversed string in the upcoming loop.
  I use a for loop to loop through the input, setting i to be
  the length of the string - 1 so that it starts at the last letter.
  In every iteration I add whatever the current letter is to the
  reversed string variable. Once the loop is finished I simply
  return the reversed string variable
*/
