/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    const isBiggerThanA = (ch) => ch > 'a';
    const isMiddlePosition = (idx) => {
        return palindrome.length%2 === 1 && idx === Math.floor(palindrome.length/2);
    };
    const findReplaceTargetIndex = (ch, idx) => {
        return isBiggerThanA(ch) && isMiddlePosition(idx)===false;
    };
    const replaceStringAt = (str, idx, ch) => {
        return str.substr(0, idx) + ch + str.substr(idx+1);
    };

    if (palindrome.length === 1) {
        return '';
    }

    const idx = [...palindrome].findIndex(findReplaceTargetIndex);

    // 모든 문자가 'a'인 경우에는 맨마지막 문자를 'b'로 변경해주면 된다.
    if (idx === -1) {
        return replaceStringAt(palindrome, palindrome.length-1, 'b');
    }

    // 일반적인 경우 'a'가 아닌 가장 첫 글자를 'a'로 변경해 주면 됨.
    return replaceStringAt(palindrome, idx, 'a');
};
