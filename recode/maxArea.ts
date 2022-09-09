function maxArea(height: number[]): number {
    const n = height.length;
    let l = 0;
    let r = n - 1;
    let res: number = 0;
    while(l < r) {
        const lHeight = height[l];
        const rHeight = height[r];
        let area: number = 0;
        if (lHeight >= rHeight) {
            area = rHeight * (r - l);
            r -=1;
        } else {
            area = lHeight * (r - l);
            l += 1;
        }
        // console.log(area);
        res = Math.max(res, area);
    }
    return res;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));