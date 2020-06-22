/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */

class RandomListNode {
    constructor(label){
        this.label = label;
        this.next = null;
        this.random = null;
    }
}

let copyRandomList = function (head) {

    if (head === null) {
        return null;
    }

    let nodeMap = new Map();
    let curr = head;
    while (curr !== null) {
        nodeMap.set(curr, new RandomListNode(curr.label));
        curr = curr.next;
    }

    for (let [node, newNode] of nodeMap) {
        if (node.next !== null) {
            newNode.next = nodeMap.get(node.next);
        }
        if (node.random !== null) {
            newNode.random = nodeMap.get(node.random);
        }
    }
    return nodeMap.get(head);
};

copyRandomList();