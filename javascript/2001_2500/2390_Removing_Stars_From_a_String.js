/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let ret = '';

    let numOfStars = 0;
    for(let i=s.length-1; i>=0; i--) {
        if (s[i] === '*') {
            numOfStars += 1;
        } else {
            if (numOfStars > 0) {
                numOfStars -= 1;
            } else {
                ret = s[i] + ret;
            }
        }
    }

    return ret;
};
