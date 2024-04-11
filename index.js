function isPalindrome(word) {
  // Write your algorithm here
  // write a funchtion that takes input
  // check condition one
  // check else condition if condition one is not met
  // return true if condition on met
  // return false for else condition
  const len = word.length;

  for (let i = 0; i < len / 2; i++) {
    if (word[i] !== word[len - 1 - i])
      // As long as the characters from each part match, the FOR loop will go on
      return false;
  }
  return true;
}

/* 
  Add your pseudocode here
  fuction to takes an input(word)
    for a letter in word, iterate through letters if index number is less than word length divided by two
      if index letter is not equal to index letter backward
        return false'the word is not readable backward please enter another word'
     
    return true  
   
*/

/*
  Add written explanation of your solution here
  We declared len variable to equal to the length of the input word 
  We use for loop to iterate through the input word letters
  Next we use conditional if statement to compare letters in every iteration
  And return false if the condition is not met.
  Then the for loop return true after passing through test 

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
