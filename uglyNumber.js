// function nthUglyNumber(n: number): number {
//     let dp: number[] = [1], a = 0, b = 0, c = 0;
//     let i = 1;
//     while(i < n) {
//         dp[i] = Math.min(dp[a] * 2, dp[b] * 3, dp[c] * 5);
//         if (dp[i] === dp[a] * 2) a++;
//         if (dp[i] === dp[b] * 3) b++;
//         if (dp[i] === dp[c] * 5) c++;
//         i++;
//     }
//     console.log(dp);
//     return dp[i - 1];
// };
function nthUglyNumber(n) {
    var heap = new CreatMinHeap();
    var dic = {};
    var dp = [];
    heap.push(1);
    while (dp.length < n) {
        var cur = heap.pop();
        dp.push(cur);
        var a_1 = cur * 2;
        if (!dic[a_1]) {
            heap.push(a_1);
            dic[a_1] = true;
        }
        var b = cur * 3;
        if (!dic[b]) {
            heap.push(b);
            dic[b] = true;
        }
        ;
        var c = cur * 5;
        if (!dic[c]) {
            heap.push(c);
            dic[c] = true;
        }
        ;
    }
    console.log(dp);
    return dp[n - 1];
}
;
var CreatMinHeap = /** @class */ (function () {
    function CreatMinHeap() {
        this.list = [null];
    }
    CreatMinHeap.prototype.heapSize = function () {
        return this.list.length;
    };
    CreatMinHeap.prototype.push = function (num) {
        var _a;
        this.list.push(num);
        var len = this.heapSize();
        var curIndex = len - 1;
        while (true) {
            if (curIndex === 1)
                break;
            var parentIndex = Math.floor(curIndex / 2);
            if (this.list[parentIndex] > this.list[curIndex]) {
                _a = [this.list[curIndex], this.list[parentIndex]], this.list[parentIndex] = _a[0], this.list[curIndex] = _a[1];
                curIndex = parentIndex;
            }
            else {
                break;
            }
        }
    };
    CreatMinHeap.prototype.pop = function () {
        var _a, _b;
        var len = this.heapSize();
        _a = [this.list[len - 1], this.list[1]], this.list[1] = _a[0], this.list[len - 1] = _a[1];
        var res = this.list.pop();
        len = this.heapSize();
        var index = 1;
        while (true) {
            var exchange = index * 2;
            if (exchange > len - 1)
                break;
            if (this.list[exchange] > this.list[exchange + 1])
                exchange++;
            if (this.list[index] > this.list[exchange]) {
                _b = [this.list[exchange], this.list[index]], this.list[index] = _b[0], this.list[exchange] = _b[1];
            }
            else {
                break;
            }
            index = exchange;
        }
        return res;
    };
    return CreatMinHeap;
}());
nthUglyNumber(87);
