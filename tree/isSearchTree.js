/**
 * @description 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    //后序遍历：左  右  根
    //思路：递归方法，写一个比较函数（[]），函数里面分离出根、左、右；
    //然后判断left里面的所有值是否都小于根，right里面的所有值是否都大于根，有一个不满足，直接返回false，若都满足，继续递归左、右（最后一个节点为根节点）
    //设置临界处，如果传入参数只有一个节点或为空，则返回true即可
    if (!postorder.length) {
        return true;
    }
    let root = postorder.pop();
    let min = -1;
    for (let i = postorder.length - 1; i >= 0; i--) {
        if (postorder[i] < root) {
            min = i;
            break;
        }
    }
    let left = postorder.slice(0, min + 1),
        right = postorder.slice(min + 1);
    if (Math.max(...left) > root || Math.min(...right) < root) {
        return false;
    }
    return verifyPostorder(left) && verifyPostorder(right);
};
const post = [1, 3, 2, 6, 5];
const main = verifyPostorder(post)
console.log(main)