/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
function numJewelsInStones(J, S) {
	count = 0;
	for(var i=0; i<J.length; i++){
		for(var j=0; j<S.length; j++){
			if(J.charAt(i) == S.charAt(j)){
				count++;
			}
		}
	}
	return count;
};

var J = "aA";
var S = "aAAbbbb";

console.log(numJewelsInStones(J,S));