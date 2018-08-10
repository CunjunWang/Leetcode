/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxConsecutiveOnes(nums){
	var numsString = nums.toString();
	var numsArr = numsString.split(",0,");
	console.log(numsArr);
}

var nums = [0,1,1,0,1,1,1];
findMaxConsecutiveOnes(nums);