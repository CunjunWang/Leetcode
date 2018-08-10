function singleNumber(nums){
	nums.sort(compare);
	for(var i=0; i<nums.length; i=i+2){
		if(nums[i+1] - nums[i] !== 0){
			return nums[i];
			break;
		}
	}
	function compare(a,b){
		return a > b ? 1 : -1;
	}
}

var nums1 = [6,6,8,1,1,2,2,4,4,9,9,11,11];
console.log(singleNumber(nums1));