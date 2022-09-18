function searchRange(nums, target) {
    const n = nums.length;
    let leftBorder = 0;
    let rightBorder = 0;
    let left = 0;
    let right = n - 1;
    while (left < right) {
        const mid = (left + right) >> 1;
        const midValue = nums[mid];
        if (midValue >= target) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    if (nums[left] === target) {
        leftBorder = left;
    }
    else {
        return [-1, -1];
    }
    left = 0;
    right = n - 1;
    while (left < right) {
        const mid = (left + right + 1) >> 1;
        const midValue = nums[mid];
        if (midValue > target) {
            right = mid - 1;
        }
        else {
            left = mid;
        }
    }
    if (nums[left] === target) {
        rightBorder = left;
    }
    return [leftBorder, rightBorder];
}
;
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
