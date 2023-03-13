/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    return parseInt([...n].sort().pop());
};
