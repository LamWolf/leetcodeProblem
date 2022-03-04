function maxValue(grid: number[][]): number {
    let max = 0;
    let m = grid.length, n = grid[0].length;
    function recur(x: number, y: number, count: number = 0) {
        if (x >= n) return;
        if (y >= m) return;
        count += grid[y][x];
        if (x === n - 1 && y === m - 1) {
            console.log(count);
            max = Math.max(max, count);
            return;
        }
        recur(x + 1, y, count);
        recur(x, y + 1, count);
    }
    recur(0, 0, 0);
    // console.log(max);
    return max;
};

maxValue([[1,2,5],[3,2,1]]);