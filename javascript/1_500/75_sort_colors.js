/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let red = 0;
    let white = 0;
    let blue = 0;

    for (let i=0; i<nums.length; i++) {
        switch (nums[i]) {
            case 0: red += 1; break;
            case 1: white += 1; break;
            case 2: blue += 1; break;
        }
    }

    let p = 0;
    for (let i=0; i<red; i++) {
        nums[p] = 0;
        p += 1;
    }
    for (let i=0; i<white; i++) {
        nums[p] = 1;
        p += 1;
    }
    for (let i=0; i<blue; i++) {
        nums[p] = 2;
        p += 1;
    }
};
