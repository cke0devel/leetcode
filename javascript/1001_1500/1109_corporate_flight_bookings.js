/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    let inout = [];

    bookings.forEach(([first, last, seats]) => {
        inout.push([first, seats]);
        inout.push([last+1, -seats]);
    });

    inout.sort((a,b) => {
        if (a[0] != b[0]) return a[0] - b[0];

        return a[1] - b[1];
    });

    let answer = [];
    let p = 0;
    let seats = 0;

    for (let i=1; i<=n; i++) {
        while(p<inout.length && inout[p][0] === i) {
            seats += inout[p][1];
            p += 1;
        }

        answer.push(seats);
    }

    return answer;
};
