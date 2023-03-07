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
 */
var BSTIterator = function(root) {
    this.trace = [];
    this.cur = root;

    while (this.cur.left != null) {
        this.trace.push(this.cur);
        this.cur = this.cur.left;
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let target = this.cur;

    if (this.cur.right != null) {
        this.cur = this.cur.right;
        while (this.cur.left != null) {
            this.trace.push(this.cur);
            this.cur = this.cur.left;
        }
    }
    else {
        this.cur = this.trace.pop();
    }
    
    return target.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.cur != null;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
