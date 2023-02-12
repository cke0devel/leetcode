/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    let digits = [...num.toString()];
    let sorted = [...num.toString()];
    sorted.sort((a,b) => {
        if (a>b) return -1;
        if (a<b) return 1;
        return 0;
    });

    for (let i=0; i<digits.length; i++) {
        if (digits[i] !== sorted[i]) {
            const idx = digits.lastIndexOf(sorted[i]);
            digits[idx] = digits[i];
            digits[i] = sorted[i];
            break;
        }
    }

    return digits.map(x=>parseInt(x)).reduce((a,b)=>a*10+b, 0);
};
