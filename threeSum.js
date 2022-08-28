function threeSum(nums) {
    nums.sort();
    const n = nums.length;
    let l = 0;
    let mid = 1;
    let r = n - 1;
    const res = [];
    while (nums[l] <= 0 && nums[r] >= 0 && mid < r) {
        const lNum = nums[l];
        const midNum = nums[mid];
        const rNum = nums[r];
        console.log('============');
        console.log(lNum, midNum, rNum);
        if (lNum + midNum + rNum === 0) {
            res.push([lNum, midNum, rNum]);
            l += 1;
            mid = l + 1;
            if (mid === r) {
                break;
            }
        }
        else if (lNum + midNum + rNum < 0) {
            if (midNum < 0) {
                mid += 1;
                continue;
            }
            else {
                l += 1;
                mid = l + 1;
            }
        }
        else {
            r -= 1;
            mid = l + 1;
        }
    }
    return res;
}
;
console.log(threeSum([0, 0]));
