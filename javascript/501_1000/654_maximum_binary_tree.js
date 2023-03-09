/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    const inner = (start, end) => {
        if (start>=end) return null;

        let mi = start;

        for (let i=start+1; i<end; i++) {
            if (nums[mi] < nums[i]) {
                mi = i;
            }
        }

        let node = new TreeNode(nums[mi]);

        node.left = inner(start, mi);
        node.right = inner(mi+1, end);

        return node;
    };

    return inner(0, nums.length);
};
