/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let answer = nums.length+1;
    let sum = 0;

    let j=0;
    for(let i=0; i<nums.length; i++) {
        while(sum >= target) {
            answer = Math.min(answer, i-j);

            sum -= nums[j];
            j += 1;
        }

        sum += nums[i];

        if (sum >= target) {
            answer = Math.min(answer, i-j+1);
        }
    }

    while(sum >= target) {
        answer = Math.min(answer, nums.length-j);

        sum -= nums[j];
        j += 1;
    }

    if (answer == nums.length+1) {
        return 0;
    }

    return answer;
};
