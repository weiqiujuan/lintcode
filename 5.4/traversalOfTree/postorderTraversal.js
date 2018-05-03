import {BinaryTree, testTree} from "./memoryTree";

//顺序存储结构的后序遍历
function postOrderTraverse(x, visit) {
    if (testTree[2 * x + 1]) postOrderTraverse(2 * x + 1, visit);
    if (testTree[2 * x + 2]) postOrderTraverse(2 * x + 2, visit);
    visit(testTree[x]);
}


//链式存储的递归后序遍历
BinaryTree.prototype.postOrderTraverse = function postOrderTraverse(visit) {
    if (this.leftChild) postOrderTraverse.call(this.leftChild, visit);
    if (this.rightChild) postOrderTraverse.call(this.rightChild, visit);
    visit(this.data);
};

//非递归后续遍历
BinaryTree.prototype.postOrder_stack = function (visit) {
    let stack = new Stack();
    stack.push([this, 0]);

    while (stack.top) {
        let a = stack.pop();
        let node = a[0];

        switch (a[1]) {
            case 0:
                stack.push([node, 1]);//修改mark域
                if (node.leftChild) stack.push([node.leftChild, 0]);
                break;
            case 1:
                stack.push([node, 2]);
                if (node.rightChild) stack.push([node.rightChild, 0]);
                break;
            case 2:
                stack.push([node.data]);
                break;
            default:
                break;

        }
    }
};