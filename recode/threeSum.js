function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let l = 0;
    let r = n - 1;
    const res = [];
    if (l > 0 || r < 0) {
        return [];
    }
    for (let i = 1; i < n - 1; i++) {
        l = 0;
        r = n - 1;
        // if (i > 1 && nums[i] === nums[i - 1]) continue;
        while (l < i && r > i) {
            while (r > i && r < n - 1 && nums[r] === nums[r + 1])
                r -= 1;
            while (l < i && l > 0 && nums[l] === nums[l - 1])
                l += 1;
            if (r === i || l === i)
                break;
            const count = nums[l] + nums[i] + nums[r];
            console.log(count);
            if (count === 0) {
                res.push([nums[l], nums[i], nums[r]]);
                l += 1;
                continue;
            }
            if (count > 0) {
                r -= 1;
                continue;
            }
            if (count < 0) {
                l += 1;
                continue;
            }
        }
    }
    return res;
}
;
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
