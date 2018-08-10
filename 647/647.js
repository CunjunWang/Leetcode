// Given a string, your task is to count how many palindromic 
// substrings in this string.
// The substrings with different start indexes or end indexes 
// are counted as different substrings even they consist of same characters.
// Example 1:
// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:
// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
/**
 * @param {string} s
 * @return {number}
 */
function countSubstrings(s){
	var result = [];
    var substrings = getAllSubstrings(s);
    for(var i=0; i<substrings.length; i++){
    	if(isPalindromic(substrings[i])){
    		result.push(substrings[i]);
    	}
    }
    return result.length;
}

function getAllSubstrings(s){
  var i, j, result = [];
  for(i=0; i<s.length; i++) {
      for(j=i+1; j<s.length+1; j++) {
          result.push(s.slice(i, j));
      }
  }
  return result;
}

function isPalindromic(s){
	if(s.length === 1){
		return true;
	}
	else{
		// length is even
		if(s.length % 2 === 0){
			for(var i=0; i<s.length/2; i++){
				if(s.charAt(i) !== s.charAt(s.length-(i+1))){
					return false;
				}
			}
			return true;
		}
		// length is odd
		else{
			for(var i=0; i<Math.ceil(s.length/2)-1; i++){
				if(s.charAt(i) !== s.charAt(s.length-(i+1))){
					return false;
				}
			}
			return true;
		}
	}
}