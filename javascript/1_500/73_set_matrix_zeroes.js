/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const h = matrix.length;
    const w = matrix[0].length;

    let rows = [];
    let cols = [];

    for (let row=0; row<h; row++) {
        for (let col=0; col<w; col++) {
            if (matrix[row][col] === 0) {
                rows.push(row);
                cols.push(col);
            }
        }
    }

    rows.forEach(row => matrix[row].fill(0));
    cols.forEach(col => {
        for(let i=0; i<h; i++) matrix[i][col] = 0;
    });
};
