/*输入一个链表，输出该链表中倒数第k个结点。
* k >= 0;
* 如果k大于链表长度，则返回 NULL;*/

/* 思路：快慢指针法，
* 用一快指针，一个慢指针。
* 快指针比慢指针快k-1个节点
* 当快指针到链表末尾的时候，慢指针到target目标节点*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} pListHead
 * @param {number} k
 * @return {ListNode}
 */

const findKthToTail = function (pListHead, k) {
    if (!pListHead || k === 0) {
        return null
    }
    let fastList = pListHead;
    let slowList = pListHead;
    for (let i = 0; i < k - 1; i++) {
        if (fastList.next) {
            fastList = fastList.next
        } else {
            return null
        }
    }
    while (fastList.next) {
        fastList = fastList.next;
        slowList = slowList.next
    }
    return slowList
};

const main = findKthToTail([1, 2, 3, 4, 5], 2)
console.log(main)