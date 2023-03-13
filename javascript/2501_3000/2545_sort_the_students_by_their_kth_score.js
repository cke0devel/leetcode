/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    return score.sort((lhs, rhs) => {
        return rhs[k] - lhs[k];
    });
};
