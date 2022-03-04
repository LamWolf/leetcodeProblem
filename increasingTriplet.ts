function increasingTriplet(nums: number[]): boolean {
    if (nums.length < 3) return false;
    let small = null;
    let mid = null;
    let large = null;
    for (let item of nums) {
        console.log(mid);
        if (large !== null) return true;
        if (small === null) {
            small = item;
            continue;
        }
        if (item > small && mid === null) {
            mid = item;
            continue;
        }
        if (item < small) small = item;
        if (item > small && item < mid) mid = item;
        if (item > mid) large = item;
    }
    return false;
};

console.log(increasingTriplet([5,4,3,2,1]));