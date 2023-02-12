/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let answer = 0;

    const dfs = (y,x) => {
        if (grid[y][x] === 0) {
            return 0;
        }

        let cnt = 0;

        grid[y][x] = 0;
        if (y>0 && grid[y-1][x]===1) cnt += dfs(y-1, x);
        if (y<grid.length-1 && grid[y+1][x]===1) cnt += dfs(y+1, x);
        if (x>0 && grid[y][x-1]===1) cnt += dfs(y, x-1);
        if (x<grid[0].length-1 && grid[y][x+1]===1) cnt += dfs(y, x+1);

        return cnt + 1;
    };

    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) {
            if (grid[i][j] == 1) {
                answer = Math.max(answer, dfs(i,j));
            }
        }
    }

    return answer;
};
