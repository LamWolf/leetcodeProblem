function kSmallestPairs(nums1, nums2, k) {
    var _a;
    var _b = [nums1.length, nums2.length, false], n = _b[0], m = _b[1], flag = _b[2];
    if (n > m) {
        _a = [m, n, nums2, nums1, !flag], n = _a[0], m = _a[1], nums1 = _a[2], nums2 = _a[3], flag = _a[4];
    }
    var heap = new CreateHeap(function (a, b) { return a[0] - b[0] > 0; });
    var res = [];
    for (var i = 0; i < Math.min(n, k); i++) {
        heap.heapPush([nums1[i] + nums2[0], i, 0]);
    }
    while (res.length < k && heap.size() > 0) {
        var _c = heap.heapPop(), _ = _c[0], a_1 = _c[1], b = _c[2];
        res.push(flag ? [nums2[b], nums1[a_1]] : [nums1[a_1], nums2[b]]);
        if (b + 1 < m)
            heap.heapPush([nums1[a_1] + nums2[b + 1], a_1, b + 1]);
        console.log(heap.getHeap());
    }
    return res;
}
;
var CreateHeap = /** @class */ (function () {
    function CreateHeap(compFunc) {
        this.list = [null];
        this.compFunc = compFunc;
    }
    /**
    * heapPush
    * @param {any} num
    */
    CreateHeap.prototype.heapPush = function (num) {
        this.insert(num);
    };
    /**
    * heapPop
    * @return {Number} num
    */
    CreateHeap.prototype.heapPop = function () {
        return this.pop();
    };
    /**
    * getHeap
    */
    CreateHeap.prototype.getHeap = function () {
        var res = this.list.concat();
        res.shift();
        return res;
    };
    CreateHeap.prototype.size = function () {
        return this.list.filter(function (item) { return item; }).length;
    };
    CreateHeap.prototype.insert = function (num) {
        var _a;
        this.list.push(num);
        var size = this.p_size();
        if (size === 2)
            return;
        var index = size - 1;
        while (index > 1) {
            var parent_1 = Math.floor(index / 2);
            if (!this.compFunc(this.list[index], this.list[parent_1])) {
                _a = [this.list[index], this.list[parent_1]], this.list[parent_1] = _a[0], this.list[index] = _a[1];
                index = parent_1;
            }
            else {
                break;
            }
        }
        // console.log(this.list);
    };
    CreateHeap.prototype.pop = function () {
        var _a, _b;
        var topNumber = this.list[1];
        _a = [this.list[this.p_size() - 1], this.list[1]], this.list[1] = _a[0], this.list[this.p_size() - 1] = _a[1];
        this.list.pop();
        var size = this.p_size();
        var targetIndex = 1;
        var exchange = targetIndex * 2;
        while (exchange < size) {
            var right = targetIndex * 2 + 1;
            if (right < size && !this.compFunc(this.list[right], this.list[exchange])) {
                exchange++;
            }
            // console.log(exchange);
            // console.log('beforePop', this.list)
            if (this.compFunc(this.list[exchange], this.list[targetIndex])) {
                break;
            }
            _b = [this.list[targetIndex], this.list[exchange]], this.list[exchange] = _b[0], this.list[targetIndex] = _b[1];
            targetIndex = exchange;
            exchange = targetIndex * 2;
        }
        console.log('pop', this.list);
        return topNumber;
    };
    CreateHeap.prototype.p_size = function () {
        return this.list.length;
    };
    return CreateHeap;
}());
// [34,774,1640,1814,2364,2733,2872,3556,4310,4344,4850,5158,6062,6778,7542,8115,8590,9071,9204,10021,10288,10987,11850,12773,12948,13940,14475,14572,15254,15730,16287,17010,17698,18014,18128,18692,18804,19283,19804,20386,20763,20808,21600,22144,22982,23535,23861,23982,24938,25251,25663,26298,26939,27077,27419,27997,28809,28975,29904,30717,30886,31853,32433,33338,33878,33881,34266,34685,35239,35455,36153,36493,36650,37184,37310,38178,38304,39298,40029,40430,41145,41288,41395,41633,42625,43613,43798,44733,45332,45470,45944,46657,47307,48232,48463,49443,49736,50240,51119,52041]
// [801,933,1093,1498,2384,2665,3310,4119,4786,4975,5292,6132,6344,6818,7448,8264,8904,9118,10053,10745,11671,12517,12558,12819,12843,13750,13765,14481,14787,14922,15824,15892,16879,17151,18100,18208,18866,19414,20372,20551,20856,21547,21917,22879,23389,24317,24974,25051,25367,26047,26942,27711,28453,28629,28972,29587,30559,31377,32077,33036,33784,34480,35178,35640,36386,37225,37482,38338,38481,39286,39680,40533,41354,41965,42268,42619,43027,43631,44109,44191,44245,45240,45303,46106,46810,47282,47859,48212,48378,48549,49229,49548,50354,50521,51411,52322,52792,53256,53388,53571]
// 1000
var heap = new CreateHeap(function (a, b) { return (a[0] - b[0]) > 0; });
// let nums1 = [34,774,1640,1814,2364,2733,2872,3556,4310,4344,4850,5158,6062,6778,7542,8115,8590,9071,9204,10021,10288,10987,11850,12773,12948,13940,14475,14572,15254,15730,16287,17010,17698,18014,18128,18692,18804,19283,19804,20386,20763,20808,21600,22144,22982,23535,23861,23982,24938,25251,25663,26298,26939,27077,27419,27997,28809,28975,29904,30717,30886,31853,32433,33338,33878,33881,34266,34685,35239,35455,36153,36493,36650,37184,37310,38178,38304,39298,40029,40430,41145,41288,41395,41633,42625,43613,43798,44733,45332,45470,45944,46657,47307,48232,48463,49443,49736,50240,51119,52041];
var nums1 = [34, 774, 1640, 1814, 2364, 2733, 2872, 3556, 4310];
var nums2 = [801, 933, 1093, 1498, 2384, 2665, 3310, 4119];
// let nums2 = [801,933,1093,1498,2384,2665,3310,4119,4786,4975,5292,6132,6344,6818,7448,8264,8904,9118,10053,10745,11671,12517,12558,12819,12843,13750,13765,14481,14787,14922,15824,15892,16879,17151,18100,18208,18866,19414,20372,20551,20856,21547,21917,22879,23389,24317,24974,25051,25367,26047,26942,27711,28453,28629,28972,29587,30559,31377,32077,33036,33784,34480,35178,35640,36386,37225,37482,38338,38481,39286,39680,40533,41354,41965,42268,42619,43027,43631,44109,44191,44245,45240,45303,46106,46810,47282,47859,48212,48378,48549,49229,49548,50354,50521,51411,52322,52792,53256,53388,53571];
// let [n, m, flag] = [nums1.length, nums2.length, false];
// if (n > m) {
//     [n, m, nums1, nums2, flag] = [m, n, nums2, nums1, !flag];
// }
// for (let i = 0; i < Math.min(n, 1000); i++) {
//     heap.heapPush([nums1[i] + nums2[0], i, 0]);
// }
// console.log(heap.getHeap());
kSmallestPairs(nums1, nums2, 1000);
