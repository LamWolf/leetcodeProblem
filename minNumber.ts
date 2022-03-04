function minNumber(nums: number[]): string {
    const strs: string[] = nums.map(item => String(item));
    function strQuick(l: number, r: number): void {
        if(l >= r) return;
        let i = l - 1, j = l;
        while(j < r) {
            if (Number(strs[j] + strs[r]) <= Number(strs[r] + strs[j])) {
                [strs[i + 1], strs[j]] = [strs[j], strs[i + 1]];
                i++
            }
            j++;
        }
        console.log(`l: ${l}, i: ${i}, r: ${r}`);
        [strs[i + 1], strs[r]] = [strs[r], strs[i + 1]];
        // console.log(strs);
        strQuick(l, i);
        strQuick(i + 1, r);
    }
    strQuick(0, strs.length - 1);
    return strs.join();
};

console.log(minNumber([1,1,1]));