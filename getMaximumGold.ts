function getMaximumGold(grid: number[][]): number {
    let max = 0;
    let m = grid.length, n = grid[0].length;
    let vis: boolean[][] = new Array(m);
    for(let i = 0; i < m; i++) {
        let newN = new Array(n);
        vis[i] = newN;
    }
    let direction = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    function dfs(i: number, j: number) {
        let ans = grid[i][j];
        for(let x = 0; x < direction.length; x++) {
            let ni = i + direction[x][0];
            let nj = j + direction[x][1];
            if (ni < 0 || ni >= m || nj < 0 || nj >= n || grid[ni][nj] === 0 || vis[ni][nj] === true) continue;
            vis[ni][nj] = true;
            ans = Math.max(ans, ans + dfs(ni, nj))
            vis[ni][nj] = false;
        }
        return ans;
    }
    for(let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            console.log(`i${i}, j${j}`);
            if (grid[i][j] === 0) continue;
            vis[i][j] = true;
            max = Math.max(dfs(i, j), max);
            console.log(vis);
            vis[i][j] = false;
        }
    }
    return max;
};

getMaximumGold([[0,6,0],[5,8,7],[0,9,0]]);