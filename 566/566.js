// param {number[][]} nums
// param {number} r = rows
// param {number} c = columns
// return {number[][]} 

function matrixReshape(nums,r,c){
	var toReturn = [];
	var numCopy = [];
	var outerSize = nums.length;
	var innerSize = nums[0].length;
	if(outerSize * innerSize !== r * c){
		return nums;
	}
	else{
		for(var i=0; i<outerSize; i++){
			numCopy = numCopy.concat(nums[i]);
		}
		console.log(numCopy.length);
		// console.log(numCopy);
		for(var j=0; j<numCopy.length; j+=c){
			var subArr = numCopy.slice(j,j+c);
			// console.log(subArr);
			toReturn.push(subArr);
		}
		return toReturn;
	}
}

var nums = [[1,2],[3,4],[5,6]];
console.log(matrixReshape(nums,1,3));