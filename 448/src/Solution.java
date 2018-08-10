import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by CunjunWang on 16/12/21.
 */
public class Solution {
    public static List<Integer> findDisappearedNumbers(int[] nums) {
        List<Integer> toReturn = new ArrayList<Integer>();
        List<Integer> copyList = new ArrayList<Integer>();
        for(int i=0; i<nums.length; i++){
            copyList.add(i+1);
        }
        for(int i=0; i<nums.length; i++){
            if(!copyList.contains(nums[i])){
                toReturn.add(nums[i]);
            }
        }
        return toReturn;
    }

    public static void main(String[] args){
        int[] arr1 = {2,1,4,2,5};
        List list1 = findDisappearedNumbers(arr1);
        System.out.println(list1);
    }
}
