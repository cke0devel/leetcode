/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function(nums, target) {
    let answer = 0;

    for (let i=0; i<nums.length; i++) {
        for (let j=0; j<nums.length; j++) {
            if (i === j) continue;
            if (nums[i].length+nums[j].length != target.length) {
                continue;
            }

            if ((nums[i] + nums[j]) === target) {
                answer += 1;
            }
        }
    }
    
    return answer;
};
