/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 function twoSum(numbers, target){
 	var low = 0;
 	var high = numbers.length - 1;
 	if(numbers.length >= 2){
 		while(numbers[low] + numbers[high] !== target){
 			if (numbers[low] + numbers[high] < target){
 				low++;
 			} else {
 				high--;
 			}
 		}
 		return [low+1,high+1];
 	}
 }


 console.log(twoSum([1,2,3,4,4,9,56,90],8));