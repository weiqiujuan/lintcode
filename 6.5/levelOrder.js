const levelOrder = (root) => {
    let result = [];
    if (root === null) {
        return result;
    }

    let queue = [root];
    while (queue.length !== 0) {
        let len = queue.length;
        let nodes = [];

        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            nodes.push(node.val);
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        result.push(nodes);
    }
    return result;
};
levelOrder();