/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let answer = 0;
    let alphabet = new Object();

    let i=0,j=0;
    while(i < s.length) {
        if (alphabet[s[i]]==undefined || alphabet[s[i]]===0) {
            if (alphabet[s[i]] == undefined) {
                alphabet[s[i]] = 1;
            } else {
                alphabet[s[i]] += 1;
            }
            answer = Math.max(answer, i-j+1);

            i += 1;
        } else {
            alphabet[s[j]] -= 1;
            j += 1;
        }
    }

    return answer;
};
