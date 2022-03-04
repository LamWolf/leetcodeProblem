function lengthOfLongestSubstring(s: string): number {
    if (s.length < 1) return 0;
    const dic = new Map();
    let max = 0, cur = 0;
    
    for(let i = 0; i < s.length; i++) {
        let j = dic.get(s[i]) > -1 ? dic.get(s[i]) : -1;
        console.log(j);
        dic.set(s[i], i);
        console.log(dic);
        cur = i - j > cur ? cur + 1 : i - j;
        max = Math.max(max, cur);
    }
    return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));