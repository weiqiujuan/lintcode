class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const preorderTraversal = (root) => {
    if (root === null) {
        return [];
    }

    let result = [];
    result.push(root.val);

    let left = preorderTraversal(root.left);
    let right = preorderTraversal(root.right);
    result = result.concat(left, right);
    return result;
};