// Given a non-empty array of integers, return the k most frequent elements.
// For example,
// Given [1,1,1,2,2,3] and k = 2, return [1,2].
// Note: 
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), 
// where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 function topKFrequent(nums,k){
 	var obj = {};
 	for(var i=0; i<nums.length; i++){
 		if(!Object.keys(obj).includes(nums[i].toString())){
 			obj[nums[i].toString()] = 1;
 		}
 		else{
 			obj[nums[i].toString()]++;
 		}
 	}
 	var sortable = [];
 	for (var key in obj) {
 		sortable.push([key, obj[key]]);
 	}
 	sortable = sortable.sort(function(a, b) {
 		return a[1] - b[1];
 	}).reverse();
 	// console.log(sortable);
 	var toReturn = [];
 	for(var i=0; i<k; i++){
 		toReturn.push(Number(sortable[i][0]));
 	}
 	return toReturn;
 }

var nums = [1,1,1,2,2,3];
var k = 2;
console.log(topKFrequent(nums,k));