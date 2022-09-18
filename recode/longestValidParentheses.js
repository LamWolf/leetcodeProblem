function longestValidParentheses(s) {
    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        if (s[i] === '(') {
            dp[i] = 0;
        }
        else {
            if (i > 0) {
                if (s[i - 1] === '(') {
                    if (i - 2 > -1) {
                        dp[i] = dp[i - 2] + 2;
                    }
                    else {
                        dp[i] = 2;
                    }
                }
                else {
                    if (s[i - dp[i - 1] - 1] === '(') {
                        dp[i] = dp[i - 1] + 2 + ((dp === null || dp === void 0 ? void 0 : dp[i - dp[i - 1] - 2]) || 0);
                    }
                    else {
                        dp[i] = 0;
                    }
                }
            }
            else {
                dp[i] = 0;
            }
        }
    }
    let max = 0;
    dp.forEach(item => max = Math.max(item, max));
    return max;
}
;
console.log(longestValidParentheses("()(())"));
