function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    console.log(nums);
    const n: number = nums.length;
    const res: number[][] = [];
    for (let l = 0; l < n - 1; l ++) {
        if (l > 0 && nums[l] === nums[l - 1]) continue;
        let mid = l + 1;
        let r = n - 1;
        while(mid < r) {
            while(mid > l + 1 && mid < n && nums[mid] === nums[mid - 1]) mid += 1;
            if (mid >= r) break;
            const sum = nums[l] + nums[mid] + nums[r];
            if (sum === 0) {
                res.push([nums[l], nums[mid], nums[r]]);
                mid += 1;
            } else if (sum < 0) {
                mid += 1;
            } else {
                r -= 1;
            }
        }
    }
    return res;
};

console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]));