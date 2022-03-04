function reversePairs(nums: number[]): number {
    let temp = new Array<number>(nums.length).fill(0);
    function mergeSort(l: number, r: number): number {
        if (l >= r) return 0;
        let m = Math.floor((l + r) / 2);
        let res = mergeSort(l, m) + mergeSort(m + 1, r);
        let i = l, j = m + 1;
        for (let k = l;k < r + 1;k++) {
            temp[k] = nums[k];
        }
        for(let k = l; k < r + 1;k++) {
            if (i === m + 1) {
                nums[k] = temp[j];
                j++;
            } else if (j === r + 1 || temp[i] <= temp[j]) {
                nums[k] = temp[i];
                i++
            } else {
                nums[k] = temp[j];
                j++;
                res += m - i + 1;
            }
        }
        return res;
    }
    return mergeSort(0, nums.length - 1);
};

console.log(reversePairs([4,5,6,7]));