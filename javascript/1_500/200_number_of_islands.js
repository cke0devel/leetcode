/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const touch = (r,c) => {
        if (r<0 || r>=grid.length) return;
        if (c<0 || c>=grid[0].length) return;
        if (grid[r][c] === "0") return;

        grid[r][c] = "0";

        touch(r+1, c  );
        touch(r-1, c  );
        touch(r  , c+1);
        touch(r  , c-1);
    };

    let count = 0;

    grid.forEach((row, ri) => {
        row.forEach((elem, ci) => {
            if (elem === "1") {
                count += 1;
                touch(ri, ci);
            }
        });
    });

    return count;
};
