// 给定一个链表，其中奇数位是升序的，偶数位是降序的，实现链表的排序
const sortLink = (head) => {
    if (!head || !head.next) return head
    let p1 = head, p2 = head.next, right = p2;
    while (p2 && p2.next) {
        p1 = p1.next = p2.next;
        p2 = p2.next = p1.next;
    }
    [pre, cur] = [null, right]
    while (cur) {
        [cur.next, pre, cur] = [pre, cur, cur.next]
    }
    let newLink = null;
    while (head && pre) {
        if (head.val <= pre.val) {
            newLink.next = head
            head = head.next
        } else {
            newLink.next = pre
            pre = pre.next
        }
    }
    return newLink
}

