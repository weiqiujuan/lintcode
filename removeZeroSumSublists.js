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
var removeZeroSumSublists = function (head) {
    if (!head.next) {
        return head.val === 0 ? null : head
    }
    let newhead = new ListNode(null);
    newhead.next = head;
    let h = newhead.next, nums, obj = {};
    while (h && h.next) {
        nums += h.val
        if (obj[nums]) {
            head.next = obj[nums] === 0 ? h.next : obj[nums]
        } else {
            obj[nums] = h.next
        }
        h = h.next;
    }
    return newhead.next;
};

const head = [1, 2, -3, 3, 1]
const main = removeZeroSumSublists(head);
console.log(main);