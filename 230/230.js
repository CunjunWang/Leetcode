/*
Given a binary search tree, write a function kthSmallest to find 
the kth smallest element in it.
Note: 
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.
Follow up:
What if the BST is modified (insert/delete operations) often and 
you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
	var arr = [];
	readTree(root,arr);
	arr.sort(function(a,b){
		return a-b;
	});
	return arr[k-1];
}

function readTree(root, arr){
	if(!root) return;
	readTree(root.left, arr);
	arr.push(root.val);
	readTree(root.right, arr);
}
