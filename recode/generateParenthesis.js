function generateParenthesis(n) {
    const res = [];
    function dfs(leftCount, rightCount, pre) {
        if (leftCount === n && rightCount === n) {
            res.push(pre);
            return;
        }
        if (leftCount < n) {
            dfs(leftCount + 1, rightCount, pre + '(');
        }
        if (rightCount < n && rightCount < leftCount) {
            dfs(leftCount, rightCount + 1, pre + ')');
        }
    }
    dfs(0, 0, '');
    return res;
}
;
console.log(generateParenthesis(2));
