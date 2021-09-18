/*
Given two strings s and t, return true if s
is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is
formed from the original string by deleting some
(can be none) of the characters without disturbing the
relative positions of the remaining characters.
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).



Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true

*/

// create a variable to hold the number of times
// we find an equal value when iterating over both strings

// iterate over the input target string and the
// potential substring using two variables
// ****and the && operator****
  // one of these variables will equal the length of the
  // target string and the other will equal the length of
  // the substring

  // if the value of the current index of both s and t
  // are equal to eachother then increment the substring variable
  // else increment only the target variable

// if the variable counting equal values is equal to the
// substring length ? return true

// return false

const isSubsequence = (s, t) => {
  let j = 0;

  for (let i = 0; i < t.length && j < s.length; i++) {
    if (t[i] === s[j]) {
      j++
    }
  }
  if (j === s.length) {
    return true;
  }
  return false;
}

console.log(isSubsequence("abc", "ahbgdc"))
console.log(isSubsequence("axc", "ahbgdc"))