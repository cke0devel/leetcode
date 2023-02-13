/**
 *  * @param {number[]} nums
 *   * @return {number}
 *    */
var minimumDeletions = function(nums) {
        const minmax = (arr) => {
                    let min=0;
                    let max=0;

                    nums.forEach((n,idx) => {
                                    if (nums[min] > n) min = idx;
                                    if (nums[max] < n) max = idx;
                                });

                    return [min, max];
                };

        const pos = minmax(nums);
        const [p1, p2] = pos.sort((a,b) => a-b);

        let answer = nums.length;

        answer = Math.min(answer, Math.max(p1, p2)+1);
        answer = Math.min(answer, Math.max(nums.length-p1, nums.length-p2));
        answer = Math.min(answer, p1+1 + nums.length-p2);

        return answer;
};
