function minNumber(nums) {
    var strs = nums.map(function (item) { return String(item); });
    function strQuick(l, r) {
        var _a, _b;
        if (l >= r)
            return;
        var i = l - 1, j = l;
        while (j < r) {
            if (Number(strs[j] + strs[r]) <= Number(strs[r] + strs[j])) {
                _a = [strs[j], strs[i + 1]], strs[i + 1] = _a[0], strs[j] = _a[1];
                i++;
            }
            j++;
        }
        console.log("l: ".concat(l, ", i: ").concat(i, ", r: ").concat(r));
        _b = [strs[r], strs[i + 1]], strs[i + 1] = _b[0], strs[r] = _b[1];
        // console.log(strs);
        strQuick(l, i);
        strQuick(i + 1, r);
    }
    strQuick(0, strs.length - 1);
    return strs.join();
}
;
console.log(minNumber([1, 1, 1]));
