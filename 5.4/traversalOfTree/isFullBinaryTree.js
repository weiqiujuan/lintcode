
import {BinaryTree} from "./memoryTree";

BinaryTree.prototype.isFullBinaryTree=function (tree) {
    let queue = new Queue();
    let flag = 0;

    queue.enQueue(tree);

    while (queue.rear) {
        let p = queue.deQueue();

        if (!p) flag = 1;
        else if (flag) return false;
        else {
            queue.enQueue(p.leftChild);
            queue.enQueue(p.rightChild);
        }
    }
    return true;
};
