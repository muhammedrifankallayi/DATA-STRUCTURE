

function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let charMap = {};
  
    for (let end = 0; end < s.length; end++) {
      const currentChar = s.charAt(end);
      console.log(currentChar);
      if (charMap[currentChar] !== undefined && charMap[currentChar] >= start) {
        start = charMap[currentChar] + 1;
      }
  
      charMap[currentChar] = end;
      console.log(charMap[currentChar]+'-------------');
      console.log( end - start + 1);
      maxLength = Math.max(maxLength, end - start + 1);
    }
  
    return maxLength;
  }
  
  // Example usage:
  console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
 
  