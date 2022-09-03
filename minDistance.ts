function minDistance(word1: string, word2: string): number {
    const newWord1 = `#${word1}`;
    const newWord2 = `#${word2}`;
    const n1 = newWord1.length;
    const n2 = newWord2.length;
    const dp: number[][] = new Array(n1).fill(0).map(item => new Array(n2).fill(0));
    for (let i = 0; i < n1; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j < n2; j++) {
        dp[0][j] = j;
    }
    for(let i = 1; i < n1; i++) {
        for(let j = 1; j < n2; j++) {
            if (newWord1[i] !== newWord2[j]) {
                dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]);
            } else {
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }
    return dp[n1 - 1][n2 - 1];
};

console.log(minDistance('horse', 'ros'));