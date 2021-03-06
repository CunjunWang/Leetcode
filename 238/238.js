// Given an array of n integers where n > 1, nums, return an 
// array output such that output[i] is equal to the product of
// all the elements of nums except nums[i].
// Solve it without division and in O(n).
// For example, given [1,2,3,4], return [24,12,8,6].
// Follow up:
// Could you solve it with constant space complexity?
// (Note: The output array does not count as extra space
// for the purpose of space complexity analysis.)
/**
 * @param {number[]} nums
 * @return {number[]}
*/
function productExceptSelf(nums) {
	var temp = [1];
	var length = nums.length;
	var left = 1;
	var right = 1;
 	for(var i=1; i<length; i++){
 		left = left * nums[i-1];
 		temp.push(left);
 	}
 	for(var i=length-2; i>=0; i--){
 		right = right * nums[i+1];
 		temp[i] = temp[i]*right;
 	}
 	return temp;
 }

 var nums = [1,2,3,4];
 productExceptSelf(nums);