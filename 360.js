function gift(day, person, arr) {
    const dp = new Array(person).fill(0);
    const record = new Array(day).fill(0);
    let res = 0;
    let count7 = 0;
    for (let i = 0; i < day; i++) {
        let max = 0;
        let cur = 0;
        if (i < 7) {
            for (let j = 0; j < person; j++) {
                dp[j] = dp[j] + arr[i][j];
                max = Math.max(max, dp[j]);
            }
            cur = max - count7 + 1;
            count7 = count7 + cur;
            res += cur;
        }
        else {
            for (let j = 0; j < person; j++) {
                dp[j] = dp[j] - arr[i - 7][j] + arr[i][j];
                max = Math.max(max, dp[j]);
            }
            cur = max - (count7 - record[i - 7]) + 1;
            count7 = count7 - record[i - 7] + 1;
            res += cur;
        }
        record[i] = cur;
    }
    console.log(record);
    return res;
}
const day = 7;
const person = 2;
// const arr: number[][] = [[1], [2], [3], [4], [5], [6], [7], [8]];
const arr = [[1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3]];
console.log(gift(day, person, arr));
