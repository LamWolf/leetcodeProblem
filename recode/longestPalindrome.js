function longestPalindrome(s) {
    var n = s.length;
    if (n === 1)
        return s;
    var res = '';
    var max = 0;
    for (var i = 0; i < n - 1; i++) {
        var len = 0;
        var l = i;
        var r = i;
        var temp = s[i];
        while (l >= 0 && r < n) {
            if (s[l] === s[r]) {
                len = r - l + 1;
                temp = s.substring(l, r + 1);
                l -= 1;
                r += 1;
            }
            else {
                break;
            }
        }
        if (len > max) {
            res = temp;
            max = len;
        }
        if (s[i] === s[i + 1]) {
            l = i;
            r = i + 1;
        }
        while (l >= 0 && r < n) {
            if (s[l] === s[r]) {
                len = r - l + 1;
                temp = s.substring(l, r + 1);
                l -= 1;
                r += 1;
            }
            else {
                break;
            }
        }
        if (len > max) {
            res = temp;
            max = len;
        }
    }
    return res;
}
;
console.log(longestPalindrome("ccc"));
