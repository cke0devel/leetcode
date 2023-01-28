/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let count = 0;

    let j = 0;
    let a=0, b=0, c=0;
    for (let i=0; i<s.length; i++) {
        if (s[i]=='a') a += 1;
        else if (s[i]=='b') b += 1;
        else if (s[i]=='c') c += 1;

        while(a>0 && b>0 && c>0) {
            count += s.length - i;

            if (s[j]=='a') a -= 1;
            else if (s[j]=='b') b -= 1;
            else if (s[j]=='c') c -= 1;
            j += 1;
        }
    }

    return count;
};
