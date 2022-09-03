function bytedance(arr) {
    const n = arr.length;
    const indexArr = [];
    indexArr.push(-1);
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            indexArr.push(i);
        }
    }
    indexArr.push(n);
    const indexN = indexArr.length;
    let max = 0;
    let x = 0;
    let y = 0;
    let temp = 1;
    for (let i = 0; i < indexN - 1; i++) {
        const l = indexArr[i] + 1;
        const r = indexArr[i + 1];
        for (let j = l; j < r; j++) {
            temp *= arr[j];
        }
        if (max < temp) {
            x = l;
            y = r;
            max = temp;
        }
        temp = 1;
    }
    console.log(x + 1, y);
}
// bytedance([1, 2, 4, 0, 8, 0, 16, 32, 0]);
// bytedance([0, 0, 1, 2, 4, 0, 8, 0, 16, 32, 0]);
// bytedance([0, 0, 1, 0, 2, 0, 4, 0, 8, 0, 16, 0, 32, 0, 0, 0]);
bytedance([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
// bytedance([1, 2, 4, 0, 8]);
// bytedance([1, 2, 4, 8, 0, 256, 0]);
