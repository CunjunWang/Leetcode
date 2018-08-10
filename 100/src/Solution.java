/**
 * Created by Leonard on 2016/6/4.
 */
public class Solution {
    public static boolean isSameTree(TreeNode p, TreeNode q) {
        if((p == null && q != null) || (p != null && q == null)){
            return false;
        }
        if(p != null && q != null && p.val != q.val){
            return false;
        }
        if(p == null && q == null){
            return true;
        }
        return isSameTree(p.left,q.left) && isSameTree(p.right,q.right);
    }

    public static void main(String args[]){
        TreeNode p11 = new TreeNode(1);
        TreeNode p21 = new TreeNode(2);
        TreeNode p22 = new TreeNode(3);
        TreeNode p31 = new TreeNode(4);
        TreeNode p32 = new TreeNode(5);
        TreeNode p33 = new TreeNode(6);
        TreeNode p34 = new TreeNode(7);
        p11.left = p21;
        p11.right = p22;
        p21.left = p31;
        p21.right = p32;
        p22.left = p33;
        p22.right = p34;

        TreeNode q11 = new TreeNode(1);
        TreeNode q21 = new TreeNode(2);
        TreeNode q22 = new TreeNode(3);
        TreeNode q31 = new TreeNode(4);
        TreeNode q32 = new TreeNode(5);
        TreeNode q33 = new TreeNode(6);
        TreeNode q34 = new TreeNode(7);
        q11.left = q21;
        q11.right = q22;
        q21.left = q31;
        q21.right = q32;
        q22.left = q33;
        q22.right = q34;

        System.out.println(isSameTree(p11,q11));

        System.out.println(isSameTree(null,null));

        System.out.println(isSameTree(null,p11));

    }
}
