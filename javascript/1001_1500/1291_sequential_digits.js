/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const minimumSequentialDigitsFrom = (n) => {
        if (n > 123456789) {
            return -1;
        }
        
        const digits = [...n.toString()];

        let k = parseInt(digits[0]);
        for(let i=0; i<digits.length; i++) {
            const d = parseInt(digits[i]);

            if (d > k+i) {
                k += 1;
                break;
            } else if(d < k+i) {
                break;
            }
        }

        let ans = 0;
        for(let i=0; i<digits.length; i++) {
            if (k >= 10) {
                return parseInt('123456789'.substring(0, digits.length+1));
            }

            ans = ans*10 + k;
            k += 1;
        }

        return ans;
    };

    let num = minimumSequentialDigitsFrom(low);
    let base = parseInt(''.padStart(num.toString().length, '1'));

    if (num < 0) {
        return [];
    }

    let answer = [];
    while(num <= high) {
        answer.push(num);
        
        if (num%10 == 9) {
            const init = num - (base * (Math.floor(num/base)-1));
            num = init*10 + (init%10 + 1);
            base = base*10 + 1;
        } else {
            num += base;
        }
    }

    return answer;
};
