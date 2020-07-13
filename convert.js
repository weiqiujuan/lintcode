/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
const treeToDoublyList = function (root) {
    if (!root) return null
    const stack = []
    let node = root, pre, next;
    while (stack.length || node) {
        if (node) {
            stack.push(node)
            node = node.left
        } else {
            const top = stack.pop()
            if (!pre) {
                head = top
            } else {
                pre.right = top
            }
            top.left = pre;
            pre = top;
            node = top.right
        }
    }
    head.left = pre;
    pre.right = head;
    return head;
};