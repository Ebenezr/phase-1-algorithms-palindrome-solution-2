function isPalindrome(word) {
  // Write your algorithm here
  //convert to lowercase
  let string = word.toLowerCase();
  
  for(let i = 0; i < string.length; i++) {
    if(string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
}

/* 
  Add your pseudocode here
  Input: string
  Output: boolean
  Steps to solve the problem:
  1. convert string to lowercase
  2. iterate through string
  3. if string[i] !== string[string.length - 1 - i] return false
  4. return true
  


*/

/*
  Add written explanation of your solution here
  Explanation
  1. We need to convert the string to lowercase
  2. We need to iterate through the string
  3. We need to check if the string[i] is equal to the string[string.length - 1 - i]
  4. If the string[i] is not equal to the string[string.length - 1 - i] return false
  5. If the string[i] is equal to the string[string.length - 1 - i] return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
