/*输入一棵二叉树前序遍历和中序遍历的结果，请重建该二叉树。
注意:
二叉树中每个节点的值都互不相同；
输入的前序遍历和中序遍历一定合法；*/

/*给定：
前序遍历是：[3, 9, 20, 15, 7]
中序遍历是：[9, 3, 15, 20, 7]

返回：[3, 9, 20, null, null, 15, 7, null, null, null, null]
返回的二叉树如下所示：
    3
   / \
  9  20
    /  \
   15   7*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const buildTree = function (preorder, inorder) {
    if(!preorder.length || !inorder.length){
        return null
    }

    let rootIndex = inorder.indexOf(preorder[0])
    let left = inorder.slice(0,rootIndex)
    let right = inorder.slice(rootIndex+1)

    return {
        val: preorder[0],
        left: buildTree(preorder.slice(1,rootIndex+1), left),
        right: buildTree(preorder.slice(rootIndex+1), right)
    }
};

const main =buildTree([3, 9, 20, 15, 7],[9, 3, 15, 20, 7])
console.log(main)

const result = {
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null }
    }
}