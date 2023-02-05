/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    while(s.length>0 && s[0]==' ') {
        s = s.substring(1);
    }

    let sign = '+';

    if (s[0] === '-') { sign = '-'; s = s.substring(1); }
    else if (s[0] === '+') { sign = '+'; s = s.substring(1); }

    let answer = 0;
    for(let i=0; i<s.length; i++) {
        if (s[i] < '0' || '9' < s[i]) {
            break;
        }

        answer = answer*10 + parseInt(s[i]);
    }

    answer = answer * (sign === '-' ? -1 : 1);

    answer = Math.min(answer, 2147483647);
    answer = Math.max(answer, -2147483648);

    return answer;
}
