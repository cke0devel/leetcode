/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    const lowerBound = (arr, value) => {
        let low=0, high=arr.length-1;

        let target = -1;
        while(low <= high) {
            const mid = (low+high) >> 1;
            if (arr[mid] === value) {
                target = mid;
                break;
            }
            else if (arr[mid] > value) {
                high = mid-1;
            } else {
                low = mid+1;
            }
        }

        if (target>=0) {
            while(target>=0 && arr[target]===value) {
                target -= 1;
            }

            return target;
        }

        return high;
    };

    nums.sort((a,b) => a-b);

    let cnt = 0;

    for (let i=0; i<nums.length; i++) {
        if (nums[i] === 0) {
            continue;
        }

        for (let j=i+1; j<nums.length; j++) {
            const sum = nums[i] + nums[j];

            const lower = lowerBound(nums, sum);
            cnt += lower - j;
        }
    }

    return cnt;
};
