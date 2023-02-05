2/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const min32 = 0x80000000.toString();
    const max32 = 0x7FFFFFFF.toString();

    const negative = x < 0;
    x = Math.abs(x);

    let s = [...x.toString()].reverse().join("");
    while(s.length>0 && s[0]=='0') {
        s = s.substring(1);
    }

    if (s === "") {
        return 0;
    }
    if (s.length < max32.length) {
        return parseInt(s) * (negative ? -1 : 1);
    }

    if (negative && s>min32) {
        return 0;
    }
    else if (negative==false && s>max32) {
        return 0;
    }

    return parseInt(s) * (negative ? -1 : 1);
};
