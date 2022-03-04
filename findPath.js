// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(Board) {
    // write your code in JavaScript (Node.js 8.9.4)
    let m = Board.length;
    let n = Board[0].length;
    let max = 0;
    let dp = new Array(m);
    for(let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(false);
    }
    const Direction = [[1 , 0], [0 , 1], [-1, 0], [0, -1]];
    function dfs(i, j, basis, cur) {
        if (cur === 0 && Board[i][j] === 0) {
            return;
        }
        cur = cur * 10 + Board[i][j];
        basis = basis * 10;
        if (basis > 1000) {
            max = Math.max(max, cur);
            return;
        }
        dp[i][j] = true
        for (let d = 0; d < 4; d++) {
            const direct = Direction[d];
            const newI = i + direct[0];
            const newJ = j + direct[1];
            if (newI >= 0 && newJ >= 0 && newI < m && newJ < n && !dp[newI][newJ]) {
                dfs(newI, newJ, basis, cur);
                dp[newI][newJ] = false;
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            dfs(i, j, 1, 0);
            dp[i][j] = false;
        }
    }
    return max;
}

console.log(solution([[9, 1, 1, 0, 7], [1, 0, 2, 1, 0], [1, 9, 1, 1, 0]]));