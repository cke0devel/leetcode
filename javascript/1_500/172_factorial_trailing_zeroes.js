/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let [two, five] = [0, 0];

    const factor = (num, f) => {
        let c = 0;
        while (num % f === 0) {
            c += 1;
            num = Math.floor(num/f);
        }
        return c;
    };
    const factor2 = (num) => factor(num, 2);
    const factor5 = (num) => factor(num, 5);

    for (k=1; k<=n; k++) {
        two += factor2(k);
        five += factor5(k);
    }

    return Math.min(two, five);
};
