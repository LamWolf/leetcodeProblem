function lengthOfLongestSubstring(s) {
    if (s.length < 1)
        return 0;
    var dic = new Map();
    var max = 0, cur = 0;
    for (var i = 0; i < s.length; i++) {
        var j = dic.get(s[i]) > -1 ? dic.get(s[i]) : -1;
        console.log(j);
        dic.set(s[i], i);
        console.log(dic);
        cur = i - j > cur ? cur + 1 : i - j;
        max = Math.max(max, cur);
    }
    return max;
}
;
console.log(lengthOfLongestSubstring("abcabcbb"));
