function highestPeak(isWater) {
    const m = isWater.length, n = isWater[0].length;
    const height = [];
    const d = [];
    for (let i = 0; i < m; i++) {
        const temp = [];
        for (let j = 0; j < n; j++) {
            if (isWater[i][j] === 1) {
                d.push([i, j]);
                temp.push(0);
            }
            else {
                temp.push(-1);
            }
        }
        height.push(temp);
    }
    const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let distance = 0;
    while (d.length > 0) {
        let size = d.length;
        distance++;
        console.log(d);
        while (size-- > 0) {
            const [x, y] = d.shift();
            for (const curDirec of direction) {
                const [nx, ny] = curDirec;
                if (x + nx >= 0 && x + nx < m && y + ny >= 0 && y + ny < n && height[x + nx][y + ny] === -1) {
                    height[x][y] = distance;
                    d.push([x + nx, y + ny]);
                }
            }
        }
    }
    return height;
}
;
highestPeak([[0, 0, 1], [1, 0, 0], [0, 0, 0]]);
