/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return "1";

    const rle = (str) => {
        let cnt = 1;
        let d = str[0];

        let encoded = '';

        for (let i=1; i<str.length; i++) {
            if (d === str[i]) {
                cnt += 1;
            } else {
                encoded = `${encoded}${cnt}${d}`;

                cnt = 1;
                d = str[i];
            }
        }

        encoded = `${encoded}${cnt}${d}`;

        return encoded;
    };

    let s = "1";

    while(n>1) {
        s = rle(s);
        n -= 1;
    }

    return s;
};
