// A self-dividing number is a number that is divisible by every digit it contains.
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// Also, a self-dividing number is not allowed to contain the digit zero.
// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
function selfDividingNumbers(left,right){
	var collection = [];
	for(var i = left; i<=right; i++){
		if(isSelfDividable(i)){
			collection.push(i);
		}
	}
	return collection;
}

function isSelfDividable(num){
	strNum = num.toString();
	for(var i = 0; i<strNum.length; i++){
		if(num % Number(strNum[i]) !== 0){
			return false;
		}
	}
	return true;
}

console.log(selfDividingNumbers(1,22));