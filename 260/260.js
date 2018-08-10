/**
 * @param {number[]} nums
 * @return {number[]}
 */
function singleNumber(nums) {
    var collect = {};
    for(var i=0; i<nums.length; i++){
    	if(!collect.hasOwnProperty(nums[i])){
    		collect[nums[i]] = 1;
    	}
    	else{
    		collect[nums[i]]++;
    	}
    }
 	var toReturn = [];
 	for(var thing in collect){
 		if(collect[thing] === 1){
 			toReturn.push(Number(thing));
 		}
 	}
    return toReturn;
}

var nums = [3,3,14,324,5144,143123,53124,123,122,12,12,74,24534,3,1,41,83,213,5,352,42,1,3,75,4,5,66,5,5,5,74,13,67,796,8,64,34];
console.log(singleNumber(nums));