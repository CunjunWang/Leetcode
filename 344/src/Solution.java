/**
 * Created by Leonard on 2016/6/4.
 */
public class Solution {
    public static String reverseString(String s) {
        StringBuilder s1 = new StringBuilder();
        int size = s.length();
        for(int i=size-1; i >= 0; i--){
            s1.append(s.charAt(i));
        }
        return s1.toString();
    }

    public static void main(String args[]){
        String s1 = "";
        System.out.println(s1);
        String s11 = reverseString(s1);
        System.out.println(s11);

        String s2 = "abcde";
        System.out.println(s2);
        String s21 = reverseString(s2);
        System.out.println(s21);

        String s3 = "12345";
        System.out.println(s3);
        String s31 = reverseString(s3);
        System.out.println(s31);

        String s4 = "n5o0b";
        System.out.println(s4);
        String s41 = reverseString(s4);
        System.out.println(s41);
    }
}


