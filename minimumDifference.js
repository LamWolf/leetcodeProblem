function minimumDifference(nums, k) {
    if (k === 1)
        return 0;
    nums.sort(function (a, b) { return a - b; });
    console.log(nums);
    var res = Infinity;
    for (var i = 0; i < nums.length; i++) {
        var cur = nums[i];
        var formerIndex = i - k + 1;
        if (formerIndex < 0) {
            continue;
        }
        else {
            var difference = cur - nums[formerIndex];
            res = Math.min(difference, res);
        }
    }
    return res;
}
;
console.log(minimumDifference([87063, 61094, 44530, 21297, 95857, 93551, 9918], 6));
