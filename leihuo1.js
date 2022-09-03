function leihuo1(n) {
    if (n < 25)
        return 0;
    if (n < 125)
        return 1;
    var nArr = n.toString().split('');
    var len = nArr.length;
    var count = 0;
    var pre = Number(nArr.slice(0, 2).join(''));
    if (pre > 25) {
        count += Math.pow(10, len - 2);
    }
    for (var i = 1; i < len - 1; i++) {
        var head = Number(nArr.slice(0, i).join(''));
        var cur = Number(nArr.slice(i, i + 2).join(''));
        if (cur < 25) {
            head -= 1;
        }
        console.log(count);
        count += (head + 1) * Math.pow(10, len - i - 2);
        // if (head === 0) {
        //     count += Math.pow(10, len - i - 2);
        // } else {
        // const headArr = head.toString().split('');
        // const headLen = headArr.length;
        // for(let j = 0; j < headLen; j++) {
        //     let bit = Number(headArr[j]);
        //     console.log(count);
        //     count += (bit + 1) * (Math.pow(10, len - i - 2));
        // }
        // }
    }
    return count;
}
console.log(leihuo1(725));
