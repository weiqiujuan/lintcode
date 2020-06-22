//输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
//假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
//例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function reBuildTree(pre, win) {
    if (!pre || pre.length === 0) {
        return
    }
    let treeNode = {
        val: pre[0]
    }
    for (let i = 0; i < pre.length; i++) {
        if (win[i] === pre[0]) {
            treeNode.left = reBuildTree(pre.slice(1, i + 1), win.slice(0, i))
            treeNode.right = reBuildTree(pre.slice(i + 1), win.slice(i + 1))
        }
    }
    return treeNode
}

console.log(reBuildTree([1, 2, 4, 7, 3, 5, 6, 8], [4, 7, 2, 1, 5, 3, 8, 6]))

/*思路：*/
//因为先序遍历的第一个根节点是treeNode,中序遍历的根节点位置在中间，记为mid，在mid左侧就是treeNode的左子树，右侧即为它的右子树
//以此类推咯。