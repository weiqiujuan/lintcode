// 平衡二叉树的定义： 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) return true
    let left = dfs(root.left)
    let right = dfs(root.right)
    if (Math.abs(right - left) > 1) return false
    return isBalanced(root.left) && isBalanced(root.right)
};

/** 获取深度 */
function dfs(root) {
    if (!root) return 0
    return Math.max(dfs(root.left), dfs(root.right)) + 1
}


