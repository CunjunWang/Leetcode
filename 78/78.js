/*
Given a set of distinct integers, nums, return all 
possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,3], a solution is:

[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 function subsets(nums){
 	if(!nums || nums.length === 0) return [];
 	var result = [];
    // console.log(nums);
    for(var i=0; i<nums.length; i++){
    	subset = [];
    	subsets = generateSubset(i, nums, subset);
    	// console.log("subset = " + subset);
    	result.concat(subsets);
    }
    return result;
}

function generateSubset(i,nums,subset){
	// console.log("nums at the beginning of this iter is: " + nums);
	var newNums = nums.slice();
	// console.log("newNums is: " + newNums);
	if(i === 0) return [];
	// console.log(newNums.length);
	for(var j=0; j<nums.length; j++){
		subset.push(newNums[j]);
		// console.log(newNums[0]);
		// console.log("subset = " + subset);
		newNums.splice(j,1);
		// console.log(newNums);
		generateSubset(i-1, newNums, subset);
	}
}

	var nums1 = [];
	var nums2 = [1];
	var nums3 = [1,2,3];
	console.log(subsets(nums3));
