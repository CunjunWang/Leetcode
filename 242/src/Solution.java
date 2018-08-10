/**
 * Created by Leonard on 2016/6/4.
 */
public class Solution {
    public static boolean isAnagram(String s, String t) {
        int sizeS = s.length();
        int sizeT = t.length();
        if((sizeS == 0) && (sizeT == 0)){
            return true;
        }
        if(sizeS != sizeT){
            return false;
        }
        for(int i=0; i < sizeS; i++){
            for(int j=0; j < sizeT; j++){
                return s.charAt(i) == t.charAt(j);
            }
        }
        return false;
    }

    public static void main(String args[]){
        String s1 = "";
        String t1 = "";
        System.out.println(isAnagram(s1,t1));

        String s2 = "12";
        String t2 = "321";
        System.out.println(isAnagram(s2,t2));

        String s3 = "abcd";
        String t3 = "bacd";
        System.out.println(isAnagram(s3,t3));

        String s4 = "abcde";
        String t4 = "abcde";
        System.out.println(isAnagram(s4,t4));
    }
}
