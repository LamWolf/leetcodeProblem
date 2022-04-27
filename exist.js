function exist(board, word) {
    let m = board.length;
    let n = board[0].length;
    let dp = new Array(m).fill(false).map(item => new Array(n).fill(false));
    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    function dfs(x, y, rest) {
        let cur = rest[0];
        if (board[x][y] === cur) {
            if (rest.length === 1)
                return true;
            for (const dir of direction) {
                let nx = x + dir[0];
                let ny = y + dir[1];
                if (nx >= 0 && nx < m && ny >= 0 && ny < n && dp[nx][ny] === false) {
                    dp[nx][ny] = true;
                    if (dfs(nx, ny, rest.slice(1)))
                        return true;
                    dp[nx][ny] = false;
                }
            }
        }
        return false;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dp[i][j] = true;
            if (dfs(i, j, word))
                return true;
            dp[i][j] = false;
        }
    }
    return false;
}
;
// exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")
// console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"));
// console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"));
console.log(exist([['a']], 'a'));
