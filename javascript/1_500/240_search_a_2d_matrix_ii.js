/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const binary_search = (arr, target) => {
        let low=0, high=arr.length-1;

        while(low<=high) {
            const mid = Math.floor((low+high)/2);

            if (arr[mid] === target) {
                return true;
            } else if (arr[mid] > target) {
                high = mid-1;
            } else {
                low = mid+1;
            }
        }

        return false;
    };

    for(let i=0; i<matrix.length; i++) {
        if (binary_search(matrix[i], target)) {
            return true;
        }
    }

    return false;
};
