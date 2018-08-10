import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Solution {
    public static List<Integer> findDisappearedNumbers(int[] nums) {
        List<Integer> toReturn = new ArrayList<Integer>();
        List<Integer> controlList = new ArrayList<Integer>();
        List<Integer> copyList = new ArrayList<Integer>();
        for(int i=0; i<nums.length; i++){
            if(nums[i] > nums.length){
                System.out.println("Invalid element at index " + i);
            }
            controlList.add(i+1);
            copyList.add(nums[i]);
        }
        for(int i=0; i<nums.length; i++){
            if(!copyList.contains(controlList.get(i))){
                toReturn.add(controlList.get(i));
            }
        }
        return toReturn;
    }

    public static void main(String[] args){
        int[] arr1 = {2,1,4,2,5,7,1,9,2,5,10,10,11,11,2,3,20};
        System.out.println(findDisappearedNumbers(arr1));
    }
}
