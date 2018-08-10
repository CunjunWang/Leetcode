import java.util.HashSet;
import java.util.Set;

/**
 * Created by Leonard on 2016/6/4.
 */
public class Solution {
    public static boolean containsDuplicate(int[] nums) {
        int size = nums.length;
        if(size <= 1){
            return false;
        }
        Set<Integer> check = new HashSet<>();
        for(int i=0; i<size; i++){
            if(!check.contains(nums[i])){
                check.add(nums[i]);
            }
            else{
                return true;
            }
        }
        return false;
    }

    public static void main(String args[]){
        int[] nums1 = {};
        System.out.println(containsDuplicate(nums1));

        int[] nums2 = {1};
        System.out.println(containsDuplicate(nums2));

        int[] nums3 = {1,2,3,4,5};
        System.out.println(containsDuplicate(nums3));

        int[] nums4 = {1,2,3,4,5,6,7,1,8};
        System.out.println(containsDuplicate(nums4));

        int[] nums5 = {1,2,3,4,5,6,7,1,2};
        System.out.println(containsDuplicate(nums5));
    }

}
