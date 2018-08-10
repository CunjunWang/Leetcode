function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var t1 = new TreeNode(1);
var t11 = new TreeNode(3);
var t12 = new TreeNode(2);
var t13 = new TreeNode(5);

console.log(t1);

t1.left = t11;
t1.right = t12;
t11.left = t13;

var t2 = new TreeNode(2);
var t21 = new TreeNode(1);
var t22 = new TreeNode(3);
var t23 = new TreeNode(4);
var t24 = new TreeNode(7);

t2.left = t21;
t2.right = t22;
t21.right = t23;
t22.right = t24;

function mergeTrees(t1, t2) {
	if(t1 == null && t2 == null){
		return null;
	}
	
	var val;
	if(t1 == null && t2 !== null){
		val = t2.val;
	}
	else if(t1 !== null && t2 == null){
		val = t1.val;
	}
	else {
		val = t1.val + t2.val;
	}

	var node = new TreeNode(val);

	var t1left;
	if(t1 != null){
		return t1.left;
	}
	else{
		return null;
	}
	
	var t2left;
	if(t2 != null){
		return t2.left;
	}
	else{
		return null;
	}
	
	var t1right;
	if(t1 != null){
		return t1.right;
	}
	else{
		return null;
	}
	
	var t2right;
	if(t2 != null){
		return t2.right;
	}
	else{
		return null;
	}

	node.left = mergeTrees(t1left, t2left);
	node.right = mergeTrees(t1right, t2right);

	return node;
}

console.log(mergeTrees(t1,t2));