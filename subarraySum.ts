function subarraySum(nums: number[], k: number): number {
    let res: number = 0;
    let prefix: Map<number, number> = new Map<number, number>();
    const n = nums.length;
    let count: number = 0;
    prefix.set(0, 1);
    for (let i = 0; i < n; i++) {
        count += nums[i];
        const diffCount = prefix.get(count - k);
        if (diffCount) {
            res += diffCount;
        }
        prefix.set(count, (prefix.get(count) || 0) + 1);
    }
    return res;
};

console.log(subarraySum([1,-1,0], 0))