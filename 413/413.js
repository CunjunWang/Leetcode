function numberOfArithmeticSlices(array){
	var count = 0;
	for(var j=0; j<array.length; j++){
		for(var i=3; i<array.length; i++){
			if(isArithmetic(array.slice(j,j+i))){
				count++;
			}
		}
	}
	return count;
}

function isArithmetic(arr){
	var size = arr.length;
	if(size < 3){
		console.log('Invalid input!');
	}
	else{
		for(var i=1; i<size-1; i++){
			if(arr[i-1] + arr[i+1] !== 2 * arr[i]){
				return false;
			}
		}
		return true;
	}
}

console.log(numberOfArithmeticSlices([1,2,3]));