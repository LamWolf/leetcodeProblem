function searchRange(nums: number[], target: number): number[] {
    let n: number = nums.length;
    let l: number = 0;
    let r: number = n - 1;
    let mid: number = 0;
    while(l < r) {
        mid = Math.floor((l + r) / 2);
        console.log('mid', mid);
        if (nums[mid] === target) break;
        if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid;
        }
        console.log('l', l);
    }
    mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
        let left = mid, right = mid;
        while(left > 0 && nums[left] === target) left--;
        if (nums[left] !== target) left ++;
        while(right < n - 1 && nums[right] === target) right++;
        if (nums[right] !== target) right --;

        return [left, right];
    }
    return [-1, -1];
};

console.log(searchRange([1, 4], 1));