/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let result = head; // 最终返回头指针
    var current = head.next;  // 偶数指针
    while (current && current.next) {
        let temp = current.next;    // 偶数指针后面的奇数节点
        current.next = temp.next;   // 偶数指针后面的偶数节点
        temp.next = head.next;      // 这个奇数指向头部后面的第一个偶数
        head.next = temp;           // 头指针指向找到的这个奇数指针
        head = head.next;           // 头指针后移
        current = current.next;     // 偶指针后移
    }
    return result;
};