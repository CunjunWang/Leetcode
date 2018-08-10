/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
/**
 * @param {TreeNode} root
 * @return {number}
 */
function sumOfLeftLeaves(root) {
	var sum = 0;
	if(root.left === null && root.right === null){
		return root.val;
	}
	return sum + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};