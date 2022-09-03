function gift (day: number, person: number, arr:number[][]): number {
    const dp: number[] = new Array(person).fill(0);
    const record: number[] = new Array(day).fill(0);
    let res: number = 0;
    let count7: number = 0;
    for(let i = 0; i < day; i++) {
        let max: number = 0;
        let cur: number = 0;
        if (i < 7) {
            for(let j = 0; j < person; j++) {
                dp[j] = dp[j] + arr[i][j];
                max = Math.max(max, dp[j]);
            }
            cur = max - count7 + 1;
            count7 = count7 + cur;
            res += cur;
        } else {
            for (let j = 0; j < person; j++) {
                dp[j] = dp[j] - arr[i - 7][j] + arr[i][j];
                max = Math.max(max, dp[j]);
            }
            cur = max - (count7 - record[i - 7]) + 1
            count7 = count7 - record[i - 7] + cur;
            res += cur;
        }
        record[i] = cur;
    }
    return res;
}

const day:number = 7;
const person: number = 2;
// const arr: number[][] = [[1], [2], [3], [4], [5], [6], [7], [8]];
const arr: number[][] = [[1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3]];

console.log(gift(day, person, arr));