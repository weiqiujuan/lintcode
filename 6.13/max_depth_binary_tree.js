class TreeNode {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

const maxDepth = (root) => {
    if (root === null) {
        return 0
    }

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1;
};

const test = () => {
    let root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.left = new TreeNode(4);
    root.right.right = new TreeNode(5);
    console.log(maxDepth(root));
};
test();
