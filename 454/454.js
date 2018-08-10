/*
Given four lists A, B, C, D of integer values, compute how many 
tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.
To make problem a bit easier, all A, B, C, D have same length of N
where 0 ≤ N ≤ 500. All integers are in the range of -2^28 to 2^28 - 1 
and the result is guaranteed to be at most 2^31 - 1.
Example:
Input:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]
Output:
2
Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
function fourSumCount(A, B, C, D){
	// naive solution; exceed time limit;
	/*
	var count = 0;
	var length = A.length;
	for(var i=0; i<length; i++){
		for(var j=0; j<length; j++){
			for(var k=0; k<length; k++){
				for(var l=0; l<length; l++){
					if(A[i]+B[j]+C[k]+D[l]===0){
						count++;
					}
				}
			}
		}
	}
	return count;
	*/
	var count = 0;
	
}
