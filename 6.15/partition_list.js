class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const partition = (head, x) => {
    if (head === null) {
        return head;
    }

    let smallDummy = new ListNode(0);
    let bigDummy = new ListNode(0);

    let smallTail = smallDummy;
    let bigTail = bigDummy;

    while (head !== null) {
        if (head.val < x) {
            smallTail.next = head;
            smallTail = smallTail.next;
        } else {
            bigTail.next = head;
            bigTail = bigTail.next;
        }
        head = head.next;
    }
    smallTail.next = bigDummy.next;
    bigTail.next = null;

    return smallDummy.next;
};

const test = () => {
    let head = new ListNode(1);
    head.next = new ListNode(5);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    let x = 4;
    console.log(partition(head, x));
};

test();
