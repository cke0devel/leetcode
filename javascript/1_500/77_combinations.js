/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let answer = [];

    const combinations = (p, l) => {
        if (p > n) {
            return;
        }

        l.push(p);
        if (l.length === k) {
            answer.push(l.slice());
        } else {
            combinations(p+1, l);
        }
        l.pop();

        combinations(p+1, l);
    };

    combinations(1, []);

    return answer;
};
