/**
 * Created by Leonard on 2016/6/4.
 */
public class Solution {
    public static int[] productExceptSelf(int[] nums) {
        int size = nums.length;
        int[] output = new int[size];
        int result = 1;
        int result1 = 0;
        for(int i=0; i<size; i++){
            if(nums[i] != 0) {
                result = result * nums[i];
            }
        }
        for(int i=0; i<size; i++){
            if(nums[i] != 0) {
                output[i] = result / nums[i];
            }
            else{
                output[i] = result1;
            }
        }
        return output;
    }

    public static void main(String args[]){
        int[] nums1 = {0,0};
        int[] output1 = productExceptSelf(nums1);
        for(int i=0; i<output1.length; i++){
            System.out.print(output1[i] + " ");
        }
        System.out.println();

        int[] nums2 = {1,2,3,4};
        int[] output2 = productExceptSelf(nums2);
        for(int i=0; i<output2.length; i++){
            System.out.print(output2[i] + " ");
        }
        System.out.println();
    }
}
