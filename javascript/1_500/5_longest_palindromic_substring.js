2/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const isPalindrome = (str, start, end) => {
        for(let i=0; start+i < end-i-1; i++) {
            if (str[start+i] != str[end-i-1]) {
                return false;
            }
        }

        return true;
    };

    for(let l=s.length; l>=0; l--) {
        for(let i=0; i+l<=s.length; i++) {
            if (isPalindrome(s, i, i+l)) {
                return [...s].slice(i, i+l).join("");
            }
        }
    }

    return "";
};
