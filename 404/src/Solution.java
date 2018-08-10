/**
 * Created by CunjunWang on 16/12/22.
 */

public class Solution {
    public static int sumOfLeftLeaves(TreeNode root, boolean isLeft) {
        if (root == null) {
            return 0;
        }
        int sum = 0;
        if (root.left != null || root.right != null) {
            sum += sumOfLeftLeaves(root.left, true);
            sum += sumOfLeftLeaves(root.right, false);
        } else if (isLeft) {
            sum += root.val;
        }
        return sum;
    }

    public static void main(String[] args){

        TreeNode treeNode1 = new TreeNode(3);
        TreeNode treeNode2 = new TreeNode(9);
        TreeNode treeNode3 = new TreeNode(20);
        TreeNode treeNode4 = new TreeNode(15);
        TreeNode treeNode5 = new TreeNode(7);

        treeNode1.left = treeNode2;
        treeNode1.right = treeNode3;
        treeNode3.left = treeNode4;
        treeNode3.right = treeNode5;

        int sum = sumOfLeftLeaves(treeNode1,false);
        System.out.println(sum);

    }
}
