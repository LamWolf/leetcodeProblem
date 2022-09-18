// 输入：candidates = [2,3,6,7], target = 7
// 输出：[[2,2,3],[7]]
function combinationSum(candidates, target) {
    const res = [];
    const n = candidates.length;
    function dfs(start, rest, curArr) {
        if (rest === 0) {
            res.push(curArr.concat());
        }
        else if (rest < 0) {
            return;
        }
        else {
            for (let i = start; i < n; i++) {
                curArr.push(candidates[i]);
                dfs(i, rest - candidates[i], curArr);
                curArr.pop();
            }
        }
    }
    dfs(0, target, []);
    return res;
}
;
console.log(combinationSum([2, 3, 6, 7], 7));
