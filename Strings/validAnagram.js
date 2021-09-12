// Given two strings s and t,
// return true if t is an anagram of s, and false otherwise.

/*
i: two strings
o: boolean
c: lowercase chars
e: ??
*/

// an anagram has the same letters but in different order

// if we sort the anagrams we should have the same letters
  //split
  //sort
  //join
  //check equality

  const isAnagram = (s, t) => {
    // return s.split('').sort().join('') === t.split('').sort().join('');

    if (s.length !== t.length) {
      return false;
    }

    let charMap = {};

    for (let i = 0; i < s.length; i++) {

      if (charMap[s.charAt(i).charCodeAt(0)] === undefined) {
        charMap[s.charAt(i).charCodeAt(0)] = 1
      } else {
        charMap[s.charAt(i).charCodeAt(0)]++
      }

      if (charMap[t.charAt(i).charCodeAt(0)] === undefined){
        charMap[t.charAt(i).charCodeAt(0)] = -1
      } else {
        charMap[t.charAt(i).charCodeAt(0)]--
      }
    }

    for (let charCode in charMap) {
      if (charMap[charCode] !== 0) {
        return false
      }
    }

    return true;
  }

  let s = 'anagram'
  let t = 'nagaram'
  let r = 'rat'
  let b = 'bat'

console.log(isAnagram(s, t))
console.log(isAnagram(r, b))