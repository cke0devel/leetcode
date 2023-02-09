/**
 * @param {string[][]} watchedVideos
 * @param {number[][]} friends
 * @param {number} id
 * @param {number} level
 * @return {string[]}
 */
var watchedVideosByFriends = function(watchedVideos, friends, id, level) {
    const kdistance = (g, u, d) => {
        let visit = new Array(g.length).fill(false);
        let cur = [u];

        visit[u] = true;
        while(d > 0) {
            let tmp = [];

            cur.forEach(v => {
                for (let i=0; i<g[v].length; i++) {
                    const friend = g[v][i];

                    if (visit[friend] === false) {
                        tmp.push(friend);
                        visit[friend] = true;
                    }
                }
            });

            cur = tmp;

            d -= 1;
        }

        return cur;
    };

    const kfriends = kdistance(friends, id, level);

    let freq = {};

    kfriends.forEach(p => {
        watchedVideos[p].forEach(video => {
            if (freq.hasOwnProperty(video)) {
                freq[video] += 1;
            } else {
                freq[video] = 1;
            }
        });
    });

    return Object.entries(freq).sort((a,b) => {
        if (a[1] === b[1]) {
            if (a[0] < b[0]) return -1;
            if (a[0] > b[0]) return 1;
            return 0;
        }

        return a[1] - b[1];
    }).map(e => e[0]);
};
