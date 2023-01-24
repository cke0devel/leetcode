/**
 * @param {string[]} positive_feedback
 * @param {string[]} negative_feedback
 * @param {string[]} report
 * @param {number[]} student_id
 * @param {number} k
 * @return {number[]}
 */
var topStudents = function(positive_feedback, negative_feedback, report, student_id, k) {
    const positive = new Set(positive_feedback);
    const negative = new Set(negative_feedback);

    let student = {};

    for(let i=0; i<report.length; i++) {
        const tokens = report[i].split(' ');
        const points = tokens.map(e => {
            if (positive.has(e)) {
                return 3;
            }
            if (negative.has(e)) {
                return -1;
            }
            return 0;
        });

        const total = points.reduce((a, b) => a + b, 0);
        student[student_id[i]] = total;
    }

    const points_of_students = [];

    for (const [key, value] of Object.entries(student)) {
        points_of_students.push([key, value]);
    }

    points_of_students.sort((lhs, rhs) => {
        if (lhs[1] == rhs[1]) {
            return lhs[0] - rhs[0];
        }

        return rhs[1] - lhs[1];
    });

    return points_of_students.slice(0, k).map(e => e[0]);
};
