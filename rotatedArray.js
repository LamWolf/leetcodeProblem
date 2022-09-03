function search(nums, target) {
    var n = nums.length;
    if (nums[0] > target && nums[n - 1] < target)
        return -1;
    var isBack = nums[n - 1] < nums[0];
    var l = 0;
    var r = n - 1;
    while (l < r) {
        var mid = Math.floor((l + r) / 2);
        console.log('mid', mid);
        if (nums[mid] === target)
            return mid;
        if (mid === l)
            break;
        if (nums[mid] > target) {
            if (isBack) {
                if (nums[mid] > nums[l] && target < nums[l]) {
                    l = mid;
                }
                else {
                    r = mid - 1;
                }
            }
            else {
                r = mid - 1;
            }
        }
        else {
            if (isBack) {
                if (nums[mid] < nums[r] && target > nums[r]) {
                    r = mid - 1;
                }
                else {
                    l = mid;
                }
            }
            else {
                l = mid;
            }
        }
    }
    if (nums[r] === target)
        return r;
    if (l === r && nums[l] === target)
        return l;
    return -1;
}
;
// console.log(search([3, 1], 1));
console.log(search([3, 5, 1], 3));
// console.log(search([4,5,6,7,0,1,2], 0));
