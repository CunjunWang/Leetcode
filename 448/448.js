/**
 * @param {number[]} nums
 * @return {number[]}
 */

function findDisappearedNumbers(nums) {
    nums.sort(compare);
    var control = [];
    var toReturn = [];
    for(var i=0; i<nums.length; i++){
        if(nums[i] > nums.length){
            console.log('Invalid element at index ' + i);
        }
        control[i] = i+1;
    }
    for(var i=0; i<nums.length; i++){
        if(nums.indexOf(control[i]) === -1){
            toReturn.push(control[i]);
        }
    }
    return toReturn;
}

function compare(a,b){
    return a>b ? 1 : -1;
}

arr1 = [2,1,4,2,5,7,1,9,2,5,10,10,11,11,2,3,20];
console.log(findDisappearedNumbers(arr1));
