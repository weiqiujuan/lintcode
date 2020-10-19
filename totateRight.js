/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function (head, k) {
    if (!head) return null
    if (k === 0) return head;
    let headCount = head, count = 0;
    while (headCount) {
        headCount = headCount.next
        count++
    }
    k = k % count
    if (k === 0) return head;
    let slow = head, fast = head, res = null;
    while (k) {
        fast = fast.next
        k--
    }
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next
    }
    if (!fast) return head
    res = slow.next;
    slow.next = null;
    fast.next = head;

    return res
};