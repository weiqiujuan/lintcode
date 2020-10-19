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
// 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。
// 请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。
const oddEvenList = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let result = head; // 最终返回头指针
    let current = head.next;  // 偶数指针
    while (current && current.next) {
        let temp = current.next;    // 偶数指针后面的奇数节点
        current.next = temp.next;   // 偶数指针后面的偶数节点
        temp.next = head.next;      // 这个奇数指向头部后面的第一个偶数
        head.next = temp;           // 头指针指向找到的这个奇数指针
        head = head.next;           // 头指针后移
        current = current.next;     // 偶指针后移
    }
    return result;
    // if (!head || !head.next) return head
    // let slow = head, fast = head.next, right = fast;
    // while (fast && fast.next) {
    //     slow = slow.next = fast.next
    //     fast = fast.next = slow.next
    // }
    // slow.next = right
    // return head
};