function search(nums, target) {
    const n = nums.length;
    let left = 0;
    let right = n - 1;
    const leftBorder = nums[0];
    while (left < right) {
        const mid = (left + right) >> 1;
        const midValue = nums[mid];
        if (midValue === target)
            return mid;
        if (midValue < leftBorder) {
            if (target < leftBorder) {
                if (midValue > target) {
                    right = mid;
                }
                else {
                    left = mid + 1;
                }
            }
            else {
                right = mid;
            }
        }
        else {
            if (target < leftBorder) {
                left = mid + 1;
            }
            else {
                if (midValue > target) {
                    right = mid;
                }
                else {
                    left = mid + 1;
                }
            }
        }
    }
    if (nums[left] === target) {
        return left;
    }
    return -1;
}
;
// [4,5,6,7,0,1,2]
// 3
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
