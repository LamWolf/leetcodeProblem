function lengthOfLongestSubstring(s: string): number {
    const map: Map<string, number> = new Map();
    let l = 0, r = 0;
    let max = 0;
    for(let i = 0; i < s.length; i++) {
        if(map.get(s[i]) >= l) {
            const preLength = i - l;
            max = Math.max(max, preLength);
            l = map.get(s[i]) + 1;
        }
        map.set(s[i], i);
    }
    max = Math.max(max, s.length - l);
    return max;
};

console.log(lengthOfLongestSubstring(' '));