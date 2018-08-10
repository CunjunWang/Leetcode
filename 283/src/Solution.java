/**
 * Created by Leonard on 2016/6/1.
 */
public class Solution {
    public static void moveZeroes(int[] nums) {
        int nonZero = 0;
        int size = nums.length;
        int[] returnArr = new int[size];
        for(int i = 0; i < size; i++) {
            if(nums[i] != 0){
                returnArr[nonZero] = nums[i];
                nonZero++;
            }
        }
        for(int i = 0; i < size; i++){
            if(nums[i] == 0){
                returnArr[nonZero] = 0;
                nonZero++;
            }
        }
        for(int i = 0; i < size; i++){
            nums[i] = returnArr[i];
        }
    }

    public static void main(String args[]){
        int[] arr1 = new int[]{0,1,0,2,0,3,0,4,0,5};
        moveZeroes(arr1);
        for(int i = 0; i < arr1.length;i++){
            System.out.print(arr1[i] + " ");
        }

    }

}
