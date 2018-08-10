/*
Given a n x n matrix where each of the rows and columns are sorted
in ascending order, find the kth smallest element in the matrix.
Note that it is the kth smallest element in the sorted order, 
not the kth distinct element.
Example:
matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,
return 13.
Note: 
You may assume k is always valid, 1 ≤ k ≤ n^2.
*/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
function kthSmallest(matrix, k) {
    var arr = [];
    var length = matrix.length;
    for(var i=0; i<length; i++){
    	for(var j=0; j<length; j++){
    		arr.push(matrix[i][j]);
    	}
    }
    arr.sort(function(a,b){
    	return a-b;
    });
    return arr[k-1];
}

var matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
];
var k = 8;
console.log(kthSmallest(matrix,k));

