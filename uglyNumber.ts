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
function nthUglyNumber(n: number): number {
    const heap = new CreatMinHeap();
    const dic = {};
    const dp: number[] = [];
    heap.push(1);
    while(dp.length < n) {
        const cur: number = heap.pop();
        dp.push(cur);
        let a = cur * 2;
        if (!dic[a]) {
            heap.push(a);
            dic[a] = true;
        }
        let b = cur * 3;
        if (!dic[b]) {
            heap.push(b);
            dic[b] = true;
        };
        let c = cur * 5;
        if (!dic[c]) {
            heap.push(c);
            dic[c] = true;
        };
    }
    console.log(dp);
    return dp[n - 1];
};

class CreatMinHeap {
    constructor() {
        this.list = [null];
    }
    private list: number[]
    private heapSize(): number {
        return this.list.length;
    }

    public push(num: number): void {
        this.list.push(num);
        const len = this.heapSize();
        let curIndex = len - 1;
        while(true) {
            if (curIndex === 1) break;
            const parentIndex = Math.floor(curIndex / 2);
            if (this.list[parentIndex] > this.list[curIndex]) {
                [this.list[parentIndex], this.list[curIndex]] = [this.list[curIndex], this.list[parentIndex]];
                curIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    public pop(): number {
        let len = this.heapSize();
        [this.list[1], this.list[len - 1]] = [this.list[len - 1], this.list[1]];
        const res = this.list.pop();
        len = this.heapSize();
        let index = 1;
        while(true) {
            let exchange = index * 2;
            if (exchange > len - 1) break;
            if (this.list[exchange] > this.list[exchange + 1]) exchange++;
            if (this.list[index] > this.list[exchange]) {
                [this.list[index], this.list[exchange]] = [this.list[exchange], this.list[index]];
            } else {
                break;
            }
            index = exchange;
        }
        return res;
    }
}

nthUglyNumber(87);