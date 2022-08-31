function minSubArrayLen(target: number, nums: number[]): number {
    const n = nums.length;
    const prefixArr = new Array(n + 10).fill(0);
    let ans = n + 10;
    for (let i = 1; i <= n; i++) {
        prefixArr[i] = prefixArr[i - 1] + nums[i - 1];
    }
    console.log(prefixArr);
    for (let i = 1; i <= n; i++) {
        const sum: number = prefixArr[i];
        if (sum < target) continue;
        const diff = sum - target;
        let l = 0, r = i;
        while(l < r) {
            let mid = l + r + 1 >> 1;
            if (prefixArr[mid] <= diff) {
                l = mid;
            } else {
                r = mid - 1;
            }
        }
        console.log('r',r, i);
        if (prefixArr[r] <= diff) ans = Math.min(ans, i - r);
    }
    return ans === n + 10 ? 0 : ans;
};

console.log(minSubArrayLen(15, [1,2,3,4,5]));