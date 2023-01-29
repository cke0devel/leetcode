/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
    let chessboard = new Array(8).fill(null).map(() => new Array(8).fill(' '));

    queens.forEach(pos => {
        chessboard[pos[1]][pos[0]] = 'Q';
    });

    const check = (posx, posy, deltax, deltay) => {
        while (0<=posx && posx<8 && 0<=posy && posy<8) {
            if (chessboard[posy][posx] === 'Q') {
                return [posx, posy];
            }

            posx += deltax;
            posy += deltay;
        }

        return null;
    };

    let answer = [];
    let res = null;

    answer.push(check(king[0], king[1], 0, 1));
    answer.push(check(king[0], king[1], 0, -1));
    answer.push(check(king[0], king[1], 1, 0));
    answer.push(check(king[0], king[1], -1, 0));
    answer.push(check(king[0], king[1], 1, -1));
    answer.push(check(king[0], king[1], 1, 1));
    answer.push(check(king[0], king[1], -1, -1));
    answer.push(check(king[0], king[1], -1, 1));

    return answer.filter(e => e != null);
};
