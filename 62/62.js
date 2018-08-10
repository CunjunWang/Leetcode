/*
A robot is located at the top-left corner of a m x n grid
(marked 'Start' in the diagram below)
The robot can only move either down or right at any point in time.
The robot is trying to reach the bottom-right corner of the grid
(marked 'Finish' in the diagram below).
How many possible unique paths are there?
Above is a 3 x 7 grid. How many possible unique paths are there?
Note: m and n will be at most 100.
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n){
	// mathematically: C^m_(m+n)*C^n_(m+n)
	return combination(m+n-2,m-1);
}

function factorial(k,result){
	if(k===0) return 1*result;
	return factorial(k-1, result*k);
}

function combination(n,k){
	return factorial(n,1)/(factorial(k,1)*factorial(n-k,1));
}