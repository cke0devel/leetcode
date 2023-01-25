/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let groups = {};

    strs.forEach(s => {
        const anagram = [...s].sort().join("");

        if (groups[anagram] === undefined) {
            groups[anagram] = [s];
        } else {
            groups[anagram].push(s);
        }
    });

    return Object.entries(groups).map(([k, v]) => v);
};
