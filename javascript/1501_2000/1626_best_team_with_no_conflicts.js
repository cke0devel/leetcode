/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
    const comp = (lhs, rhs) => {
        if (lhs[0] === rhs[0]) {
            return lhs[1] - rhs[1];
        }
        return lhs[0] - rhs[0];
    };
    
    let data = scores.map((score, idx) => {
        return [ages[idx], score];
    });
    data.sort(comp);

    let overall = new Array(scores.length).fill(0);

    for (let i=0; i<data.length; i++) {
        overall[i] = data[i][1];

        for (let j=0; j<i; j++) {
            if (data[i][0]==data[j][0] || (data[i][0]>data[j][0] && data[i][1]>=data[j][1])) {
                overall[i] = Math.max(overall[i], overall[j] + data[i][1]);
            }
        }
    }

    return Math.max(...overall);
};
