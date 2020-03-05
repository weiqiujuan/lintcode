/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(head, val) {
   //  node.val = node.next.val;
   //  node.next = node.next.next;
   // //  Object.assign(node, node.next)

    if(!head) return head;
    head.next =deleteNode(head.next,val)
    return head.val === val ? head.next : head;
};
