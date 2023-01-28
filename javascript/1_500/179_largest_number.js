/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    if (nums.every(n => n===0)) {
        return "0";
    }
    
    l = nums.map(n => n.toString());

    const comp = (lhs, rhs) => {
        if (lhs === rhs) return 0;
        if (lhs.startsWith(rhs)) return comp(lhs.substr(rhs.length), rhs);
        if (rhs.startsWith(lhs)) return comp(lhs, rhs.substr(lhs.length));

        if (lhs < rhs) return 1;
        if (lhs > rhs) return -1;
        return 0;
    };

    return l.sort(comp).join("");
};
