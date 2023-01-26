/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let steps = 0;

    while(s != "1") {
        if (s[s.length-1] == '0') {
            s = s.substring(0, s.length-1);
        } else {
            const pos = s.lastIndexOf("0");
            if (pos === -1) {
                s = '1' + ''.padStart(s.length, '0');
            } else {
                s = s.slice(0, pos) + '1' + ''.padStart(s.length-pos-1, '0');
            }
        }

        steps += 1;
    }

    return steps;
};
