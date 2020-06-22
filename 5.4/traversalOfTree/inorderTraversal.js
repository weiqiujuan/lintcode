import {BinaryTree, testTree} from "./memoryTree";

//顺序存储结构递归中序遍历
function inOrderTraverse(x, visit) {
    if (testTree[2 * x + 1]) inOrderTraverse(2 * x + 1, visit);
    visit(tree(x));
    if (testTree[2 * x + 2]) inOrderTraverse(2 * x + 2, visit);
}

//链式存储的递归中序遍历
BinaryTree.prototype.inPrderTraverse = function inPrderTraverse(visit) {
    if (this.leftChild) inPrderTraverse.call(this.leftChild, visit);
    visit(this.data);
    if (this.rightChild) inPrderTraverse.call(this.rightChild, visit);
};


//递归遍历
BinaryTree.prototype.inOrder_stack2 = function inOrder_stack2() {
    let stack = new Stack();
    let p = this;

    while (p || stack.top) {
        if (p) {
            stack.push(p);
            p = p.leftChild;
        } else {
            p = stack.pop();
            p.data && visit(p.data);
            p = p.rightChild;
        }
    }
};