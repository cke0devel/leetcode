/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let dist = [];

    points.forEach(([x,y], idx) => {
        dist.push([idx, x*x + y*y]);
    });

    dist.sort((a,b) => a[1]-b[1]);

    return dist.slice(0, k).map(([idx, d]) => {
        return points[idx];
    });
};
