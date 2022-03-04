function containsNearbyDuplicate(nums: number[], k: number): boolean {
    if (nums.length < 2) return false;
    const map = {};
    for(let i = 0; i < nums.length; i++) {
        console.log(i);
        console.log('test', map[nums[i]] > -1 && ((i - map[nums[i]]) <= k));
        if (map[nums[i]] > -1 && ((i - map[nums[i]]) <= k)) {
            return true;
        }
        map[nums[i]] = i;
    }
    console.log(map);
    return false;
};

containsNearbyDuplicate([1,2,3,1], 3);