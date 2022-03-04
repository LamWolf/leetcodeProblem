var MedianFinder = /** @class */ (function () {
    function MedianFinder() {
        this.list = [];
        this.median = 0;
        this.isEven = true;
    }
    MedianFinder.prototype.addNum = function (num) {
        var position = this.findPostion(num);
        this.list.splice(position);
        console.log(this.list);
    };
    MedianFinder.prototype.findMedian = function () {
        var len = this.list.length;
        var index = 0;
        if (len === 0)
            return 0;
        if (len % 2 > 0)
            return this.list[Math.floor(len / 2)];
        return (this.list[Math.floor(len / 2)] + this.list[Math.ceil(len / 2)]) / 2;
    };
    MedianFinder.prototype.findPostion = function (num) {
        if (this.list.length < 1)
            return 0;
        var len = this.list.length;
        var l = 0, r = len - 1;
        while ((r - l) <= 1) {
            var mid = this.list[Math.floor(len / 2)];
            if (num <= mid)
                r = mid;
            if (num > mid)
                l = mid;
        }
        return r;
    };
    return MedianFinder;
}());
/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
var obj = new MedianFinder();
obj.addNum(-1);
obj.addNum(-2);
obj.addNum(-3);
obj.addNum(-4);
obj.addNum(-5);
obj.addNum(-6);
