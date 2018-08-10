import java.util.ArrayList;
import java.util.List;

/**
 * Created by Leonard on 2016/6/1.
 */
public class Solution {
    public static int[] intersection(int[] nums1, int[] nums2) {
        List<Integer> intersection = new ArrayList<Integer>();
        if(nums1.length == 0 || nums2.length == 0){
            return new int[0];
        }
        for(int i = 0; i < nums1.length; i++){
            for(int j = 0; j < nums2.length; j++){
                if(nums1[i]==nums2[j]){
                    if(!intersection.contains(nums1[i])){
                        intersection.add(nums1[i]);
                    }
                }
            }
        }

        int[] intArr = new int[intersection.size()];
        for(int i = 0; i < intArr.length; i++){
            intArr[i] = intersection.get(i).intValue();
        }

        return intArr;

    }

    public static void main(String args[]){
        int[] arr1 = new int[]{1,2,3};
        int[] arr2 = new int[]{2,3,4,5,6};
        int[] intersection = intersection(arr1,arr2);
        for(int i = 0; i < intersection.length; i++){
            System.out.print(intersection[i] + " ");
        }
    }
}
