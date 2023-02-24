/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let counter = {};

    nums.forEach(e => {
        if (counter.hasOwnProperty(e)) {
            counter[e] += 1;
        } else {
            counter[e] = 1;
        }
    });

    let answer = 0;
    Object.entries(counter).forEach(([n,_]) => {
        const target = k - n;

        if (target == n) {
            const c = Math.floor(counter[n]/2);
            counter[n] -= c*2;
            answer += c;
        } else if (counter.hasOwnProperty(target)) {
            const c = Math.min(counter[n], counter[target]);
            counter[n] -= c;
            counter[target] -= c;
            answer += c;
        }
    });

    return answer;
};
