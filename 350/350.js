/*
Given two arrays, write a function to compute their intersection.
Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
Note:
Each element in the result should appear as many times as it shows
in both arrays.
The result can be in any order.
Follow up:
What if the given array is already sorted? How would you optimize
your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm
is better?
What if elements of nums2 are stored on disk, and the memory is limited
such that you cannot load all elements into the memory at once?
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 function intersect(nums1, nums2) {
 	var result = [];
 	nums2.sort();
 	while(nums2.length > 0){
 		if(nums1.includes(nums2[0])){
 			result.push(nums2[0]);
 			var index = nums1.indexOf(nums2[0]);
 			nums1.splice(index, 1);
 			nums2.shift();
 		}
 		else{
 			nums2.shift();
 		}
 	}
 	return result;
}

var nums1 = [1, 2, 2, 1];
var nums2 = [2, 2];
console.log(intersect(nums1, nums2));
