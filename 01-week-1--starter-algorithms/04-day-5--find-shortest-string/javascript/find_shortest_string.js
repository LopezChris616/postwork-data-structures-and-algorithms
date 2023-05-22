function findShortestString(arr) {
  // type your code here
  let strLength = arr[0].length;
  let shortestStr;

  if(arr.length === 1) {
    return arr[0];
  }

  for(let i = 1; i < arr.length; i++) {
    if(arr[i].length === 1) {
      return arr[i];
    }

    if(arr[i].length < strLength) {
      strLength = arr[i].length;
      shortestStr = arr[i];
    }
  }
  return shortestStr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  console.log("");

  console.log("Expecting: 'Mars'");
  console.log("=>", findShortestString(["Mercury", "Venus", "Earth", "Mars", "Jupiter"]));

  console.log("");

  console.log("Expecting: 'cheese'");
  console.log("=>", findShortestString(["pepperoni", "cheese", "bread crust", "tomato"]));

  // BENCHMARK HERE

}

module.exports = findShortestString;

/* Please add your pseudocode to this file
  initialize strLength var to length of first str in arr to compare length of remaining arr strings
  initialzie shortestStr to pass shortest string to return at the end
  if arr length is 1
    return first arr str

  loop through arr
    if first arr str length is 1
      return that str

    if str[i] length < strLength
      strLength = str[i] length
      shortestStr = str[i]
      
  return shortestStr
*/

/* Rewrite the problem in your own words
  I need find the shortest string from elements from a given arr
  if there is more than one string with the shortest length then
  I need to return whichever one appears first in the array
  So if the arr is ["Mercury", "Venus", "Earth", "Mars", "Jupiter"],
  then it should return "Mars" because it has the shortest number of characters
  If the arr is ["pepperoni", "cheese", "crust", "tomato"], then it should return
  "cheese" because it is the shortest string and it comes before "tomato" which is also the shortest string 
*/
