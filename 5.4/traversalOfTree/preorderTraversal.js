
import {BinaryTree,testTree} from "./memoryTree";

//顺序存储结构先序遍历二叉树
function preorderTraversal(x, visit) {
    visit(testTree[x]);
    if (tree[2 * x + 1]) preorderTraversal(2 * x + 1, visit);
    if (tree[2 * x + 2]) preorderTraversal(2 * x + 2, visit);
}


//链式存储的递归先序遍历
BinaryTree.prototype.preorderTraverse = function (visit) {
    visit(this.data);
    if (this.leftChild) preorderTraverse.call(this.leftChild, visit);
    if (this.rightChild) preorderTraverse.call(this.rightChild, visit);
};

//链式存储的非递归先序遍历
BinaryTree.prototype.preOrder_stack = function (visit) {
    let stack = new Stack();
    let p = this;

    while (p || stack.top) {
        if (p) {
            stack.push(p);
            p.data && visit(p.data);
            p = p.leftChild;
        } else {
            p = stack.pop();
            p = p.rightChild;
        }
    }
};