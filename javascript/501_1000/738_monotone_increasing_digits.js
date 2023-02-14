/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
    let digits = [...n.toString()].map(c => parseInt(c));

    for (let i=1; i<digits.length; i++) {
        if (digits[i-1] > digits[i]) {
            while(i-2>=0 && digits[i-2] === digits[i-1]) {
                i -= 1;
            }

            digits[i-1] -= 1;

            for (let j=i; j<digits.length; j++) {
                digits[j] = 9;
            }

            break;
        }
    }

    return digits.reduce((a,b) => a*10 + b, 0)
};
