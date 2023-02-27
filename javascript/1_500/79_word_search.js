/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const H = board.length;
    const W = board[0].length;

    let visits = Array(H).fill(null).map(() => Array(W).fill(false));

    const test = (r, c, p) => {
        if (p === word.length) return true;
        if (r<0 || r>=H) return false;
        if (c<0 || c>=W) return false;
        if (visits[r][c]) return false;
        if (board[r][c] != word[p]) return false;

        let res = false;
        let ch = null;

        visits[r][c] = true;

        if (test(r+1, c, p+1)) return true;
        if (test(r-1, c, p+1)) return true;
        if (test(r, c+1, p+1)) return true;
        if (test(r, c-1, p+1)) return true;

        visits[r][c] = false;

        return false;
    };

    for (let i=0; i<H; i++) {
        for (let j=0; j<W; j++) {
            if (board[i][j] === word[0]) {
                if (test(i, j, 0)) {
                    return true;
                }
            }
        }
    }

    return false;
};
