function findMinFibonacciNumbers(k) {
    var fibonacciMap = [1, 1];
    var i = 0, j = 1;
    while (true) {
        var cur = fibonacciMap[i] + fibonacciMap[j];
        if (cur < k) {
            fibonacciMap.push(cur);
        }
        else {
            break;
        }
        i++;
        j++;
    }
    console.log(fibonacciMap);
    var res = 0;
    function recur(num, flag) {
        if (num === 0)
            return;
        while (fibonacciMap[flag] > num) {
            flag--;
        }
        var nextNum = num - fibonacciMap[flag];
        res++;
        recur(nextNum, flag);
    }
    recur(k, fibonacciMap.length - 1);
    return res;
}
;
findMinFibonacciNumbers(5);
