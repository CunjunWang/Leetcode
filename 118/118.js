/*
Given numRows, generate the first numRows of Pascal's triangle.
For example, given numRows = 5,
Return
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

function generate(numRows) {
	var toReturn = [];
	if(numRows === 0){
		return toReturn;
	}
	for(var i=1; i<=numRows; i++){
		toReturn.push(generateBinomialCoefficient(i-1));
	}
	return toReturn;
}

function generateBinomialCoefficient(num){
	var toReturn = [];
	for(var i=0; i<=num; i++){
		toReturn.push(binomialCoefficient(num,i));
	}
	return toReturn;
}

function binomialCoefficient(m,n){
	return factorial(m,1)/(factorial(n,1) * factorial(m-n,1));
}

function factorial(x,result){
	if(x === 0){
		return result;
	}
	else{
		return factorial(x-1,result*x);
	}
}