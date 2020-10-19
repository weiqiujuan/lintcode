// 链表的反转
const reverseList = function (head) {
    // [pre, curr] = [null, head]
    // while (curr) {
    //     [curr.next, pre, curr] = [pre, curr, curr.next]
    // }
    // return pre
    let pre = null, pHead = head, tmp;
    while (pHead) {
        tmp = pHead.next;
        pHead.next = pre;
        pre = pHead;
        pHead = tmp;
    }
    return pre
};