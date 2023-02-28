/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let l = [];

    for (let i=0; i<intervals.length; i++) {
        l.push([intervals[i][0], 1]);
        l.push([intervals[i][1], -1]);
    }

    l.sort((lhs, rhs) => {
        if (lhs[0] === rhs[0]) {
            return rhs[1] - lhs[1];
        }

        return lhs[0] - rhs[0];
    });

    let h = 0;
    let start = 0;
    let answer = [];
    for (let i=0; i<l.length; i++) {
        if (h === 0) start = l[i][0];

        h += l[i][1];

        if (h === 0) {
            answer.push([start, l[i][0]]);
        }
    }

    return answer;
};
