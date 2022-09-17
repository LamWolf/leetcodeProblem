/**
 Do not return anything, modify nums in-place instead.
*/
function nextPermutation(nums) {
    const n = nums.length;
    let last = -1;
    let index = n - 1;
    while (index >= 0) {
        if (nums[index] >= last) {
            last = nums[index];
        }
        else {
            break;
        }
        index -= 1;
    }
    if (index > -1) {
        const target = nums[index];
        let i = index + 1;
        while (i < n) {
            if (nums[i] > target) {
                i += 1;
            }
            else {
                break;
            }
        }
        [nums[index], nums[i - 1]] = [nums[i - 1], nums[index]];
        let left = index + 1;
        let right = n - 1;
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left += 1;
            right -= 1;
        }
    }
    else {
        nums.reverse();
    }
}
;
const nums = [1, 3, 2];
nextPermutation(nums);
console.log(nums);
