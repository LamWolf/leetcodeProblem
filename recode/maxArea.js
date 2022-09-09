function maxArea(height) {
    var n = height.length;
    var l = 0;
    var r = n - 1;
    var res = 0;
    while (l < r) {
        var lHeight = height[l];
        var rHeight = height[r];
        var area = 0;
        if (lHeight >= rHeight) {
            area = rHeight * (r - l);
            r -= 1;
        }
        else {
            area = lHeight * (r - l);
            l += 1;
        }
        // console.log(area);
        res = Math.max(res, area);
    }
    return res;
}
;
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
