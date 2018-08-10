/**
 * @param {string} s
 * @return {string}
 */
function reverseString(s) {
	var toReturn = '';
	for(var i=s.length-1; i>=0; i--){
		toReturn = toReturn + s[i];
	}
	return toReturn;
}


console.log(reverseString("helloasdfhdfhahfhsol"));