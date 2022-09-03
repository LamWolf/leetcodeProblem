function search(nums: number[], target: number): number {
    let n = nums.length;
    if (nums[0] > target && nums[n - 1] < target) return -1;
    let isBack: boolean = nums[n - 1] < nums[0];
    let l = 0;
    let r = n - 1;
    while(l < r) {
        let mid = Math.floor((l + r) / 2);
        console.log('mid', mid);
        if (nums[mid] === target) return mid;
        if (mid === l) break;
        if (nums[mid] > target) {
            if (isBack) {
                if (nums[mid] > nums[l] && target < nums[l]) {
                    l = mid;
                } else {
                    r = mid - 1;
                }
            } else {
                r = mid - 1;
            }
        } else {
            if (isBack) {
                if (nums[mid] < nums[r] && target > nums[r]) {
                    r = mid - 1;
                } else {
                    l = mid;
                }
            } else {
                l = mid;
            }
        }
    }
    if (nums[r] === target) return r;
    if (l === r && nums[l] === target) return l;
    return -1;
};

// console.log(search([3, 1], 1));
console.log(search([3, 5, 1], 3));
// console.log(search([4,5,6,7,0,1,2], 0));