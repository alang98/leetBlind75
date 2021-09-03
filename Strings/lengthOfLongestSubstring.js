/*
i: string
o: integer
c: 0 <= s.length <= 5 * 104
  s consists of English letters, digits, symbols and spaces.
e: the string can be empty, return 0 if that is the case
*/

const lengthOfLongestSubstring = (inputString) => {
// create a variable and set it to an empty string
// to add unique items from the input string to
  let newSubString = '';
// create a variable and set it to 0 to keep track of the longest substring
  let longestLength = 0;
// iterate over the input string
  for (let i = 0; i < inputString.length; i++) {
    // create a variable that will check if the value at the current index of our
   // input string is present in our new string and if it is, we can use the value
   // to create a new substring that we can start tracking
    const position = newSubString.indexOf(inputString[i])
  // if the index of our position variable is present in our new string
    if (position !== -1) {
      // set our new string variable to be a substring starting at the new position
    newSubString = newSubString.substring(position + 1)
    }
  // if the current item in our input string is not in our new string
    // add it to our new string
    newSubString += inputString[i]
  // set our count variable to the whatever is the larger value between
  // our new string and the current value of our longest variable
    longestLength = Math.max(newSubString.length, longestLength);
  }
//return our longest variable after we iterate through the input string
    return longestLength;
}

console.log(lengthOfLongestSubstring('abcbba'));