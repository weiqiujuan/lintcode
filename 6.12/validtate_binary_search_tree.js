class nodeTree {
    constructor(value) {
        this.val = value;
        this.right = null;
        this.left = null;
    }
}


const isValidBST = (root) => {
    let max = Infinity;
    let min = -Infinity;
    return judge(root, min, max);

};

const judge = (root, min, max) => {
    if (root === null) {
        return true;
    }

    if (root.val <= min || root.val >= max) {
        return false
    }

    return judge(root.left, min, root.val) && judge(root.right, root.val, max);
};

const test = () => {
    let root = new nodeTree(2);
    root.left = new nodeTree(1);
    root.right = new nodeTree(5);
    console.log(isValidBST(root));
};
test();

