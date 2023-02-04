/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }

    const terms = Math.ceil(s.length / (numRows + numRows-2));
    const h=numRows, w=terms*(numRows-1);
    let device = Array(h).fill(null).map(() => Array(w).fill(''));

    let dy=1, dx=0;
    let y=0, x=0;
    [...s].forEach(c => {
        device[y][x] = c;

        let [ty, tx] = [y+dy, x+dx];
        if (ty >= h) {
            [dy, dx] = [-1, 1];
            [ty, tx] = [y+dy, x+dx];
        } else if (ty < 0) {
            [dy, dx] = [1, 0];
            [ty, tx] = [y+dy, x+dx];
        }

        [y, x] = [ty, tx];
    });

    return device.map(row => row.join("")).reduce((a,b)=>a+b, "");
};
