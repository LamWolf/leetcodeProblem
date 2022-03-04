function countDigitOne(n: number): number {
    let time = 0;
    let cur = n % 10;
    let high = Math.floor(n / 10);
    let low = 0;
    let basic = 1;
    while (high !== 0 || cur !== 0) {
        if (cur === 0) {
            time += high * basic;
        } else if (cur === 1) {
            time += high * basic + low + 1;
        } else {
            time += (high + 1) * basic;
        }
        low += cur * basic;
        cur = high % 10;
        high = Math.floor(high / 10);
        basic *= 10;
    }
    return time;
};

console.log('time', countDigitOne(12));