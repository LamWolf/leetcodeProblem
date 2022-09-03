function searchRange(nums, target) {
    var n = nums.length;
    var l = 0;
    var r = n - 1;
    var mid = 0;
    while (l < r) {
        mid = Math.floor((l + r) / 2);
        console.log('mid', mid);
        if (nums[mid] === target)
            break;
        if (nums[mid] < target) {
            l = mid + 1;
        }
        else {
            r = mid;
        }
        console.log('l', l);
    }
    mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
        var left = mid, right = mid;
        while (left > 0 && nums[left] === target)
            left--;
        if (nums[left] !== target)
            left++;
        while (right < n - 1 && nums[right] === target)
            right++;
        if (nums[right] !== target)
            right--;
        return [left, right];
    }
    return [-1, -1];
}
;
console.log(searchRange([1, 4], 1));
