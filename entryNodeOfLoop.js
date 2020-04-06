/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {number[]} head
 * @return {ListNode}
 */

const entryNodeOfLoop = function (head) {
    if (!head || !head.next || !head.next.next) {
        return null
    }
    let fast = head.next.next;
    let slow = head.next;
    // 快慢指针，判断是否有环。
    while (slow && fast) {
        if (slow !== fast) {
            fast = fast.next.next;
            slow = slow.next;
        } else break
    }
    if (!fast || !slow) {
        return null
    }
    slow = head;//一个指针从头开始走，另一个指针在环上绕，如果相等，那么那里就是环入口。
    while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};
const main = entryNodeOfLoop([1, 2, 3, 4, 5, 6])
console.log(main)