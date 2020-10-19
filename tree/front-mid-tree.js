/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @description 给定前序遍历和中序遍历，构建一棵树
 * @param frontArr
 * @param midArr
 */
function buildTree(frontArr, midArr) {
    let root = frontArr[0],
        rootIndex = midArr.indexOf(root),
        left = midArr.slice(0, rootIndex),
        right = midArr.slice(rootIndex + 1);
    root.left = buildTree(frontArr.slice(1, left.length + 1), left)
    root.right = buildTree(frontArr.slice(left.length + 1), right)
    return root
}

const frontArr = [5, 3, 2, 4, 7, 6, 8];
const midArr = [2, 3, 4, 5, 6, 7, 8];
const main = buildTree(frontArr, midArr)