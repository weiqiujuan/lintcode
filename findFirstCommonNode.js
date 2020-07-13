/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 输入两个链表，找出它们的第一个公共结点。当不存在公共节点时，返回空节点。
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var findFirstCommonNode = function (headA, headB) {
    let nodeA = headA, nodeB = headB;
    let lengthA = 0, lengthB = 0;
    // 计算链表A的长度
    while (nodeA) {
        lengthA++;
        nodeA = nodeA.next;
    }
    // 计算链表A的长度
    while (nodeB) {
        lengthB++;
        nodeB = nodeB.next;
    }
    if (!lengthA || !lengthB) return null;

    // 通过链表的长度判断快慢链表
    let len = lengthA - lengthB;
    let slow, fast;
    if (len > 0) {
        slow = headA;
        fast = headB;
    } else {
        slow = headB;
        fast = headA;
        len = Math.abs(len)
    }

    // 让慢链表追上快链表
    while (len) {
        len--;
        slow = slow.next
    }
    // 如果节点相等，则输出公共节点
    while (slow !== fast) {
        slow = slow.next
        fast = fast.next
    }
    return slow || fast
};


const findFirstCommonNodeII = function (headA, headB) {
    const map = new Map() // 开辟哈希表 map。key 是节点，value 是 boolean，代表节点是否出现过
    let node = headA
    // 遍历链表A 设置节点Map[headA] = true
    while (node) {
        map.set(node, true)
        node = node.next
    }
    node = headB
    // 遍历链表B，如果节点在 map 中出现过，那么说明这是两个链表的公共节点
    while (node) {
        if (map.has(node)) return node
        else {
            node = node.next
        }
    }
    return null
};