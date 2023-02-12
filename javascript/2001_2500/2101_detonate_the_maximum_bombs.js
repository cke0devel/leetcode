/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
    let g = new Array(bombs.length).fill(null).map(e => new Array());

    const dist = (lhs, rhs) => {
        return Math.pow(lhs[0]-rhs[0], 2) + Math.pow(lhs[1]-rhs[1], 2);
    };

    for (let i=0; i<bombs.length; i++) {
        for (let j=0; j<bombs.length; j++) {
            if (i===j) continue;

            if (dist(bombs[i], bombs[j]) <= Math.pow(bombs[i][2],2)) {
                g[i].push(j);
            }
        }
    }

    let answer = 0;

    const dfs = (u, visits) => {
        if (visits[u] === true) {
            return 0;
        }

        visits[u] = true;

        let cnt = 0;
        g[u].forEach(v => {
            cnt = cnt + dfs(v, visits);
        });

        return cnt+1;
    };

    for (let i=0; i<bombs.length; i++) {
        let visits = new Array(bombs.length).fill(false);

        const n = dfs(i, visits);

        answer = Math.max(answer, n);
    }

    return answer;
};
