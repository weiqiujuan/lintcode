/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

//大佬写的，基本思路懂了，自己也就不写了。
function HasSubtree(pRoot1, pRoot2) {
    // write code here
    if (pRoot1 !== null && pRoot2 !== null) {
        if (judge(pRoot1, pRoot2)) {
            return true;
        } else {
            return HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2);
        }
    } else {
        return false;
    }

    function judge(root1, root2) {
        if (root1 === null) return false;
        if (root2 === null) return false;
        if (root1.val !== root2.val) return false;//根节点是否相同
        return judge(root1.left, root2.left) && judge(root1.right, root2.right);//左右子节点是否相同
    }
}

HasSubtree();




