/**
 * Created by Leonard on 2016/6/4.
 */
public class Solution {
    public static ListNode removeElements(ListNode head, int val) {
        while(head != null){
            if(head.next == null){
                if(head.val == val){
                    ListNode temp = head;
                    head = null;
                    return temp;
                }
                else{
                    return null;
                }
            }
            else{
                if(head.val == val){
                    ListNode temp = head;
                    head.val = head.next.val;
                    head.next = head.next.next;
                    head = head.next;
                    return temp;
                }
                else{
                    head = head.next;
                }
            }
        }
        return null;
    }

    public static void main(String args[]){
        ListNode nd1 = new ListNode(2);
        ListNode nd2 = new ListNode(1);
        ListNode nd3 = new ListNode(6);
        ListNode nd4 = new ListNode(3);
        ListNode nd5 = new ListNode(9);
        ListNode nd6 = new ListNode(5);
        ListNode nd7 = new ListNode(0);
        nd1.next = nd2;
        nd2.next = nd3;
        nd3.next = nd4;
        nd4.next = nd5;
        nd5.next = nd6;
        nd6.next = nd7;
        nd7.next = null;
        removeElements(nd1,0);
        System.out.print(nd6.next.val);
    }
}
