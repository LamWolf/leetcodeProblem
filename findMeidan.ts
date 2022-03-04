class MedianFinder {
    constructor() {
        this.list = []
        this.median = 0;
        this.isEven = true;
    }

    list: number[]
    median: number
    isEven: boolean

    addNum(num: number): void {
        const position = this.findPostion(num);
        this.list.splice(position);
        console.log(this.list);
    }

    findMedian(): number {
        const len = this.list.length;
        let index = 0;
        if (len === 0) return 0;
        if (len % 2 > 0) return this.list[Math.floor(len / 2)];
        return (this.list[Math.floor(len / 2)] + this.list[Math.ceil(len / 2)]) / 2
    }

    findPostion(num: number): number {
        if (this.list.length < 1) return 0;
        const len: number = this.list.length;
        let l = 0, r = len - 1;
        while((r - l) <= 1) {
            let mid = this.list[Math.floor(len / 2)];
            if (num <= mid) r = mid;
            if (num > mid) l = mid;
        }
        return r;
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

var obj = new MedianFinder()
obj.addNum(-1);
obj.addNum(-2);
obj.addNum(-3);
obj.addNum(-4);
obj.addNum(-5);
obj.addNum(-6);