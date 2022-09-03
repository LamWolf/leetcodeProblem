function getScore(a:string, b:string): number {
    let aScore: number = a.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    let bScore: number = b.charCodeAt(0) - 'b'.charCodeAt(0) + 1;
    if (aScore === bScore || Math.abs(aScore - bScore) === 1) {
        return aScore + bScore;
    }
    return 0;
}

function main(s: string): number {
    let n = s.length;
    let dp: number[] = new Array(n).fill(0);
    for (let i = 1; i < n; i++) {
        let curScore = getScore(s[i], s[i - 1]);
        if (curScore > 0) {
            if (i > 1) {
                dp[i] = Math.max(dp[i - 1], dp[i - 2] + curScore);
            } else {
                dp[i] = curScore;
            }
        } else {
            dp[i] = dp[i - 1];
        }
    }
    return dp[n - 1];
}