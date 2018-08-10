/**
 * @param {string} s
 * @return {number}
 */
 function titleToNumber(s){
	// console.log("A".charCodeAt());
	var result = 0;
	var length = s.length;
	// console.log(length);
	for(var i=0; i<length; i++){
		console.log(26 * (length-i-1) + (s.charCodeAt(i) - 'A'.charCodeAt() + 1));
		result += 26 * (length-i-1) + (s.charCodeAt(i) - 'A'.charCodeAt() + 1);
		
	}
	return result;
}

console.log(titleToNumber('AA'));
