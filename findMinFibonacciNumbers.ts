function findMinFibonacciNumbers(k: number): number {
    const fibonacciMap: number[] = [1, 1];
    let i = 0, j = 1;
    while(true) {
        let cur = fibonacciMap[i] + fibonacciMap[j];
        if (cur <= k) {
            fibonacciMap.push(cur);
        } else {
            break;
        }
        i++;
        j++;
    }
    console.log(fibonacciMap);

    let res = 0;

    function recur(num: number, flag: number): void {
        if (num === 0) return;
        while(fibonacciMap[flag] > num) {
            flag--;
        }
        const nextNum = num - fibonacciMap[flag];
        res++;
        recur(nextNum, flag);
    }
    recur(k, fibonacciMap.length - 1);
    return res;
};

findMinFibonacciNumbers(5);