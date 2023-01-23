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
var subtreeWithAllDeepest = function(root) {
    let pathes = [];

    const constructMaxDepth = (node, depth, path) => {
        if (!node) {
            return;
        }

        path.push(node);

        constructMaxDepth(node.left, depth+1, path);
        constructMaxDepth(node.right, depth+1, path);

        if (pathes.length>0 && pathes[0][0] < depth) {
            pathes = [];
        }

        if (pathes.length==0 || pathes[0][0] === depth) {
            pathes.push([depth, path.slice()]);
        }

        path.pop();
    };

    const getPrefix = (arr) => {
        let prefix = [];

        let i = 0;
        while(true) {
            const check = arr.every(e => e.length>i);
            if (check === false) {
                break;
            }

            const column = arr.map(e => e[i]);
            const det = column.every(e => e===column[0]);

            if (det === false) {
                break;
            }

            prefix.push(arr[0][i]);
            i += 1;
        }

        return prefix;
    };

    constructMaxDepth(root, 0, []);

    const prefix = getPrefix(pathes.map((e)=>e[1]));

    return prefix[prefix.length-1];
};
