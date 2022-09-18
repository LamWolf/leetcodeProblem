// 输入：candidates = [2,3,6,7], target = 7
// 输出：[[2,2,3],[7]]

function combinationSum(candidates: number[], target: number): number[][] {
    const res: number[][] = [];
    const n: number = candidates.length;
    function dfs(start: number, rest: number, curArr: number[]): void {
        if (rest === 0) {
            res.push(curArr.concat());
        } else if (rest < 0) {
            return;
        } else {
            for(let i = start; i < n; i++) {
                curArr.push(candidates[i]);
                dfs(i, rest - candidates[i], curArr);
                curArr.pop();
            }
        }
    }
    dfs(0, target, []);
    return res;
};

console.log(combinationSum([2,3,6,7], 7));