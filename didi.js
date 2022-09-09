function getMaxAverage(n, k, arr) {
    arr.sort((a, b) => a - b);
    console.log(arr);
    let l = 0;
    let r = 0;
    let count = arr[0];
    let res = 0;
    while (r < n) {
        const max = (count / (r - l + 1)) * k;
        if (arr[r] <= max) {
            res = Math.max(res, r - l + 1);
            r += 1;
            if (r >= n) {
                return res;
            }
            count += arr[r];
        }
        else {
            count -= arr[l];
            l += 1;
        }
    }
    return res;
}
console.log(getMaxAverage(5, 2, [3, 10, 5, 4, 2]));
