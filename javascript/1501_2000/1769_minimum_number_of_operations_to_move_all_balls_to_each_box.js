/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let pos = [];

    for (let i=0; i<boxes.length; i++) {
        if (boxes[i] === '1') {
            pos.push(i);
        }
    }

    let ans = [];
    for (let i=0; i<boxes.length; i++) {
        let move = 0;

        for (let j=0; j<pos.length; j++) {
            move += Math.abs(pos[j] - i);
        }

        ans.push(move);
    }

    return ans;
};
