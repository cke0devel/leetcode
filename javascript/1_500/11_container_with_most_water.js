/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let s=0, e=height.length-1;

    let answer = 0;
    while(s<e) {
        answer = Math.max(answer, (e-s) * Math.min(height[s], height[e]));

        if (height[s] > height[e]) {
            e--;
        } else {
            s++;
        }
    }

    return answer;
};
