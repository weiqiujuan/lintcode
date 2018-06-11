//初始化一个树结构
class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}


class ResultType {
    constructor(balanced, height) {
        this.balanced = balanced;
        this.height = height;
    }
}

//判断是否平衡
const isBalanced = (root) => {
    let result = helper(root);
    return result.balanced;
};

//判断函数
const helper = (node) => {
    if (node === null) {
        return new ResultType(true, 0);
    }

    let left = helper(node.left);
    let right = helper(node.right);
    if (!left.balanced || !right.balanced) {
        return new ResultType(false, 0);
    }

    let balanced = Math.abs(left.length - right.length) <= 1;
    let height = Math.max(left.height, right.height) + 1;
    return new ResultType(balanced, height);
};

let test = () => {
    let node = new TreeNode(3);
    node.right = new TreeNode(20);
    node.right.left = new TreeNode(15);
    console.log(isBalanced(node));
};
test();