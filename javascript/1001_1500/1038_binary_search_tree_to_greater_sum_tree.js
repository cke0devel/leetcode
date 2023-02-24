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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    let s = 0;

    const inner = (node) => {
        if (node == null) return;

        inner(node.right);
        s += node.val;
        node.val = s;
        inner(node.left);
    };

    inner(root);

    return root;
};
