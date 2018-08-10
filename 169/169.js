/* Given an array of size n, find the majority element. 
The majority element is the element that appears more than ⌊ n/2 ⌋ times.
You may assume that the array is non-empty and the majority 
element always exist in the array.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums){
	var obj = {};
	var maj = Math.floor(nums.length / 2);
 	for(var i=0; i<nums.length; i++){
 		if(!Object.keys(obj).includes(nums[i].toString())){
 			obj[nums[i].toString()] = 1;
 		}
 		else{
 			obj[nums[i].toString()]++;
 		}
 	}
 	for(var key in obj){
 		if(obj[key] > maj){
 			return Number(key);
 		}
 	}
}

var nums = [3,2,3];
console.log(majorityElement(nums));