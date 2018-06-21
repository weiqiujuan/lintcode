class RandomListNode {
    constructor(label) {
        this.label = label;
        this.next = null;
        this.random = null;
    }
}

const copyRandomList = (head) => {
    if (head === null) {
        return null;
    }
    copyNext();
    copyRandom();
    let newHead = splitList(head);
    return newHead;
};

const copyNext = (head) => {
    let oldCurr = head;
    while (oldCurr !== null) {
        let newCurr = new RandomListNode(oldCurr.label);
        newCurr.random = oldCurr.random;
        newCurr.next = oldCurr.next;

        oldCurr.next = newCurr;
        oldCurr = oldCurr.next.next;
    }
};

const copyRandom = (head) => {
    let oldCurr = head;
    while (oldCurr !== null) {
        if (oldCurr.next.random !== null) {
            oldCurr.next.random = oldCurr.random.next;
            oldCurr = oldCurr.next.next;
        }
    }
};

const splitList = (head) => {
    let oldCurr = head;
    let newHead = head.next;

    while (oldCurr !== null) {
        let newCurr = oldCurr.next;
        oldCurr.next = oldCurr.next.next;
        if (newCurr.next !== null) {
            newCurr.next = newCurr.next.next;
            oldCurr = oldCurr.next;
        } else {
            break
        }
    }
    return newHead;
};

copyRandomList();