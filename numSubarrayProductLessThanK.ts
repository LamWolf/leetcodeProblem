function numSubarrayProductLessThanK(nums: number[], k: number): number {
    let res: number = 0;
    let l: number = 0;
    let r: number = 0;
    const n: number = nums.length;
    let count: number = 1;
    if (k <= 1) return 0;
    for(r; r < n; r++) {
        count *= nums[r];
        while(count >= k) {
            count /= nums[l];
            l++;
        }
        res += r - l + 1;
    }
    return res;
};