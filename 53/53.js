/*
Find the contiguous subarray within an array (containing at
least one number) which has the largest sum.
For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums){
	var len = nums.length;
	var dp = []; //dp[i] means the maximum subarray ending with A[i];
    dp[0] = nums[0];
    var max = dp[0];
    
    for(var i = 1; i < len; i++){
    	dp[i] = num[i] + (dp[i-1] > 0 ? dp[i-1] : 0);
    	max = Math.max(max, dp[i]);
    }
    return max;
}