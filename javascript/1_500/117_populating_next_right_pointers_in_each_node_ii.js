/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root === null) {
        return root;
    }

    const findNext = (node) => {
        if (node === null) {
            return null;
        }

        while(node !== null) {
            if (node.left !== null) return node.left;
            if (node.right !== null) return node.right;
            
            node = node.next;
        }

        return null;
    };

    if (root.left !== null) {
        if (root.right !== null) {
            root.left.next = root.right;
        } else {
            root.left.next = findNext(root.next);
        }
    }

    if (root.right !== null) {
        root.right.next = findNext(root.next);
    }

    if (root.right !== null) connect(root.right);
    if (root.left !== null) connect(root.left);

    return root;
};
