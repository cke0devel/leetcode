/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    const rle = (str) => {
        let cnt = 1;
        let d = str[0];

        let encoded = '';

        for (let i=1; i<str.length; i++) {
            if (d === str[i]) {
                cnt += 1;
            } else {
                if (cnt === 1) {
                    encoded = `${encoded}${d}`;
                } else {
                    encoded = `${encoded}${d}${cnt}`;
                }

                cnt = 1;
                d = str[i];
            }
        }

        if (cnt === 1) {
            encoded = `${encoded}${d}`;
        } else {
            encoded = `${encoded}${d}${cnt}`;
        }

        return encoded;
    };

    const s = rle(chars.join(""));
    chars.length = 0;
    [...s].forEach(c => { chars.push(c); });

    return s.length;
};
