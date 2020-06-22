/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/*思路：借助一个空的链表用来存储排序的链表*/
const merge = function (l1, l2) {
    let head = new ListNode()
    let l3 = head
    while (l1 && l2) {
        if (l1.val >= l2.val) {
            l3.next = l2
            l2 = l2.next
        } else {
            l3.next = l1
            l1 = l1.next
        }
        l3 = l3.next
    }
    l3.next = l1 || l2
    return head.next
};