function minimumDifference(nums: number[], k: number): number {
    if(k === 1) return 0;
    nums.sort((a, b) => a - b);
    console.log(nums);
    let res = Infinity;
    for(let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        let formerIndex = i - k + 1;
        if (formerIndex < 0) {
            continue;
        } else {
            let difference = cur - nums[formerIndex];
            res = Math.min(difference, res);
        }
    }
    return res;
};

console.log(minimumDifference([87063,61094,44530,21297,95857,93551,9918], 6));