/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let cur = nums[0];
    let cnt = 1;
    let p = 1;

    for(let i=1; i<nums.length; i++) {
        if (nums[i] === cur) {
            cnt += 1;

            if (cnt <= 2) {
                nums[p] = nums[i];
                p += 1;
            }
        } else {
            nums[p] = nums[i];

            cur = nums[i];
            cnt = 1;
            p += 1;
        }
    }

    return p;
};
