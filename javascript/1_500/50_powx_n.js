/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;

    if (n < 0) {
        n = -n;
        x = 1/x;
    }

    const p = myPow(x, Math.floor(n/2));

    return p*p * (n%2==0 ? 1 : x);
};
