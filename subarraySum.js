function subarraySum(nums, k) {
    let res = 0;
    let prefix = new Map();
    const n = nums.length;
    let count = 0;
    prefix.set(0, 1);
    for (let i = 0; i < n; i++) {
        count += nums[i];
        console.log('count', count);
        const diffCount = prefix.get(count - k);
        console.log('diffCount', diffCount);
        if (diffCount) {
            res += diffCount;
        }
        console.log('pre', prefix.get(count));
        prefix.set(count, (prefix.get(count) || 0) + 1);
        console.log(prefix);
    }
    return res;
}
;
console.log(subarraySum([1, -1, 0], 0));
