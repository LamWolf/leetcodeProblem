function leihuo1(n: number): number {
    if (n < 25) return 0;
    if (n < 125) return 1;
    const nArr = n.toString().split('');
    const len = nArr.length;
    let count = 0;
    let pre = Number(nArr.slice(0, 2).join(''));
    if (pre > 25) {
        count += Math.pow(10, len - 2);
    }

    for (let i = 1; i < len - 1; i++) {
        let head = Number(nArr.slice(0, i).join(''));
        let cur = Number(nArr.slice(i, i + 2).join(''));
        if (cur < 25) {
            head -= 1;
        }
        count += (head + 1) * Math.pow(10, len - i - 2);
    }
    return count;
}

console.log(leihuo1(725));