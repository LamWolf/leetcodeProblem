function longestPalindrome(s: string): string {
    let n = s.length;
    if (n < 2) return s;

    let maxLen: number = 0;
    let maxLeft: number = 0;
    let maxRight: number = 0;
    let dp: boolean[][] = new Array(n);
    for(let i = 0; i < n; i++) {
        dp[i] = new Array(n).fill(false);
    }

    for(let r = 1; r < n; r++) {
        for(let l = 0; l < r; l++) {
            if(s[l] === s[r] && ((r - l) <= 2 || dp[l + 1][r - 1])) {
                dp[l][r] = true;
                let curDis = r - l;
                if (maxLen < curDis) {
                    maxLen = curDis;
                    maxLeft = l;
                    maxRight = r;
                }
            }
        }
    }
    return s.slice(maxLeft, maxRight + 1);
};