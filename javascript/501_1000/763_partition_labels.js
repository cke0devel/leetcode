/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let answer = [];

    let start=0, end=0, pos=0;

    while(pos < s.length) {
        end = Math.max(end, s.lastIndexOf(s[pos]));

        pos += 1;
        if (pos > end) {
            answer.push(end-start+1);
            start = pos;
            end = pos;
        }
    }
    
    return answer;
};
