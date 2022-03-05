function findTargetSumWays(nums: number[], target: number): number {
    let n = nums.length;
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    let difference = sum - target;
    if (difference < 0 || difference % 2 > 0) return 0;
    let neg = difference / 2;
    let dp: number[][] = new Array(n + 1).fill(0).map(() => new Array(neg + 1).fill(0));
    dp[0][0] = 1;

    for(let i = 1;i < n + 1; i++) {
        let num = nums[i - 1];
        for(let j = 0; j < neg + 1; j++) {
            dp[i][j] = dp[i - 1][j]
            if(num <= j) {
                dp[i][j] += dp[i - 1][j - num]
            }
        }
    }
    return dp[n][neg];
};