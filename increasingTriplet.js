function increasingTriplet(nums) {
    if (nums.length < 3)
        return false;
    var small = null;
    var mid = null;
    var large = null;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var item = nums_1[_i];
        console.log(mid);
        if (large !== null)
            return true;
        if (small === null) {
            small = item;
            continue;
        }
        if (item > small && mid === null) {
            mid = item;
            continue;
        }
        if (item < small)
            small = item;
        if (item > small && item < mid)
            mid = item;
        if (item > mid)
            large = item;
    }
    return false;
}
;
console.log(increasingTriplet([5, 4, 3, 2, 1]));
