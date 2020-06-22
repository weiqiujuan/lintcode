class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const lowestCommonAncestor = (root, p, q) => {
    if (root === null) {
        return null;
    }
    if (p === root || q === root) {
        return root;
    }
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    if (left !== null && right !== null) {
        return root;
    } else if (left !== null && right === null) {
        return left;
    } else if (left === null && right !== null) {
        return right;
    }
    return null;
};

let test = () => {
    let root = new TreeNode(4);
    root.left = new TreeNode(3);
    root.right = new TreeNode(7);
    root.right.left = new TreeNode(5);
    root.right.right = new TreeNode(6);

    let p = root.right.left;
    let q = root.right.right;
    console.log(lowestCommonAncestor(root, p, q));
};

test();