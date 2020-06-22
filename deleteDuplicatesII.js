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
var deleteDuplicates = function(head) {
    if(head===null || head.next ===null){
        return head;
    }
    if(head.val===head.next.val){
        while (head.next !== null &&  head.val ===head.next.val ){
            head.next =head.next.next
        }
        head =deleteDuplicates(head.next)
    }else {
        head.next = deleteDuplicates(head.next)
    }
    return head
};
