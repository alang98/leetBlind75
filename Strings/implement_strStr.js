/*
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Example 3:

Input: haystack = "", needle = ""
Output: 0


Constraints:

0 <= haystack.length, needle.length <= 5 * 104
haystack and needle consist of only lower-case English characters.

*/

const strStr = (haystack, needle) => {

  // if (haystack === needle) {
  //   return 0
  // }

  // let start = 0;
  // let window = needle.length;

  // while (window <= haystack.length) {
  //   if (haystack.slice(start, window) === needle) {
  //     return start;
  //   } else {
  //     start++;
  //     window++;
  //   }
  // }
  // return -1;

  if (haystack === needle || needle.length === 0) {
    return 0;
  }

  if (haystack.split(needle)[0].length < haystack.length) {
    return haystack.split(needle)[0].length;
  } else {
    return -1;
  }

}

console.log(strStr('hello', 'll'));
console.log(strStr('', ''));
console.log(strStr('a', 'a'));
console.log(strStr('abc', 'c'));
