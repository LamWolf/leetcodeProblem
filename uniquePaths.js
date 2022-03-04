function uniquePaths(m, n) {
    let dp = new Array(m);
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(0);
    }
    dp[0][0] = 1;
    console.log(dp);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dp[i][j] > 0)
                continue;
            let top = 0;
            let left = 0;
            if (i > 0) {
                top = dp[i - 1][j];
            }
            if (j > 0) {
                left = dp[i][j - 1];
            }
            dp[i][j] = top + left;
        }
    }
    console.log(dp);
    return dp[m - 1][n - 1];
}
;
console.log(uniquePaths(3, 7));
