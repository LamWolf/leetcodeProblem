function getMaximumGold(grid) {
    var max = 0;
    var m = grid.length, n = grid[0].length;
    var vis = new Array(m);
    for (var i = 0; i < m; i++) {
        var newN = new Array(n);
        vis[i] = newN;
    }
    console.log(vis);
    var direction = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    function dfs(i, j) {
        var ans = grid[i][j];
        for (var x = 0; x < direction.length; x++) {
            var ni = i + direction[x][0];
            var nj = j + direction[x][1];
            if (ni < 0 || ni >= m || nj < 0 || nj >= n || grid[ni][nj] === 0 || vis[ni][nj] === true)
                continue;
            vis[ni][nj] = true;
            ans = Math.max(ans, ans + dfs(ni, nj));
            vis[ni][nj] = false;
        }
        return ans;
    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            console.log("i".concat(i, ", j").concat(j));
            if (grid[i][j] === 0)
                continue;
            vis[i][j] = true;
            max = Math.max(dfs(i, j), max);
            console.log(vis);
            vis[i][j] = false;
        }
    }
    return max;
}
;
getMaximumGold([[0, 6, 0], [5, 8, 7], [0, 9, 0]]);
