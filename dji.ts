function netease(arr: number[]): number {
    const n = arr.length;
    let res  = 0;
    let max = Number.MIN_SAFE_INTEGER;
    let maxIndex = 0;
    let secMax = Number.MIN_SAFE_INTEGER;
    let secMaxIndex = 0;
    arr.forEach((item, index) => {
        if (max < item) {
            secMax = max;
            secMaxIndex = maxIndex;
            max = item;
            maxIndex = index;
        }
    })
    for(let i = maxIndex; i < n; i+=2) {
        res += max - arr[i];
    }
    for (let i = maxIndex; i >=0; i-=2) {
        res += max - arr[i];
    }
    for (let i = secMaxIndex; i < n; i+=2) {
        res += secMax - arr[i];
    }
    for (let i = secMaxIndex; i >= 0; i-=2) {
        res += secMax - arr[i];
    }
    return res;
}

console.log(netease([1,1,4,5,1,4]));