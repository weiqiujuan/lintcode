//链式存储
 let BinaryTree = function (data, leftChild, rightChild) {
    this.data = data || null;
    this.leftChild = leftChild || null;
    this.rightChild = rightChild || null;
};

//顺序存储结构
let testTree = [1, 2, 3, 4, 5, , 6, , , 7];

export {BinaryTree,testTree};