// function findNthDigit(n: number): number {
//     if (n < 10) return n;
//     let fix: number = 0;
//     const fixLen = (cur: number): number => cur === 0 ? 0 : cur.toString().length;
//     while(n >= (1 + fixLen(fix)) * 10) {
//         // console.log((1 + fixLen(fix)) * 10);
//         n -= (1 + fixLen(fix)) * 10;
//         // console.log(n);
//         fix++;
//     }
//     // fix++;
//     const index: number = Math.ceil(n/(1 + fixLen(fix))) - 1;
//     const mod: number = n % (1 + fixLen(fix));
//     // console.log(index);
//     // console.log(mod);
//     const fixStr: string[] = fix.toString().split('');
//     return Number(fixStr[mod]);
// };
function findNthDigit(n: number): number {
    if (n < 10) return n;
    let digit: number = 1, count: number = 9, start: number = 1;
    while(n > count) {
        n -= count;
        start *= 10;
        digit += 1;
        count = 9 * start * digit;
    }
    console.log(n);
    const index = start + Math.floor((n - 1) / digit);
    const numStr = String(index);
    console.log(numStr);
    return Number(numStr[(n - 1) % digit]);
};
findNthDigit(110);