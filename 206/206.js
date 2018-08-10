/*
Reverse a singly linked list.
Hint:
A linked list can be reversed either iteratively or recursively. 
Could you implement both?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 function reverseList(head) {
 	var tail = new ListNode(head.val);
 	while(head.next){
 		var temp = new ListNode(head.next);
 		temp.next = tail;
 		tail = temp;
 		head = head.next;
 	}
 	return tail;
 }

 function ListNode(val) {
 	this.val = val;
 	this.next = null;
 }

 var node1 = new ListNode(1);
 var node2 = new ListNode(2);
 var node3 = new ListNode(3);
 var node4 = new ListNode(4);
 node1.next = node2;
 node2.next = node3;
 node3.next = node4;
 console.log(reverseList(node1));

 // reverseList(node1)