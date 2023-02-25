/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
    const tokens = s.split(' ');

    const W = tokens.length;
    const H = tokens.reduce((v, token) => Math.max(v, token.length), 0);

    let answer = new Array(H).fill(null).map(() => Array(W));

    tokens.forEach((s, j) => {
        for (let i=0; i<s.length; i++) {
            answer[i][j] = s[i];
        }
        for (let i=s.length; i<H; i++) {
            answer[i][j] = ' ';
        }
    });

    return answer.map(row => row.join("").trimEnd());
};
