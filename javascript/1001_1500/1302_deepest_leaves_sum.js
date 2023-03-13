/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let values = {};
    let maxDepth = 0;

    const dfs = (node, depth) => {
        maxDepth = Math.max(maxDepth, depth);

        if (depth in values) {
            values[depth].push(node.val);
        } else {
            values[depth] = [node.val];
        }

        if (node.left != null) dfs(node.left, depth+1);
        if (node.right != null) dfs(node.right, depth+1);
    };

    dfs(root, 1);

    return values[maxDepth].reduce((a, b) => a+b, 0);
};
