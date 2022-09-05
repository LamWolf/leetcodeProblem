const num = Number(read_line());
const numArr = read_line().split(' ').map(item => Number(item));

function getSeven(len, arr) {
    let nativeNum = 0;
    let activeNum = 0;
    let zeroNum = 0;
    let max = 0;
    let maxNum = 0;
    let maxDiff = 0;
    let minNative = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < len; i++) {
        const cur = arr[i];
        let curDiff = 0;
        if (cur > 0) {
            activeNum += 1;
            if (cur === max) {
                maxNum += 1;
            } else {
                curDiff = Math.abs(cur - 7);
                if (curDiff > maxDiff) {
                    max = cur;
                    maxDiff = curDiff;
                    maxNum = 1;
                }
            }
        }
        if (cur === 0) {
            zeroNum += 1;
        }
        if (cur < 0) {
            nativeNum += 1;
            if (cur === max) {
                maxNum += 1;
            } else {
                curDiff = Math.abs(cur - (-7));
                if (curDiff > maxDiff) {
                    max = cur;
                    maxDiff = curDiff;
                    maxNum = 1;
                }
            }
            if (cur > minNative) {
                minNative = cur;
            }
        }
    }
    let needToActive = false;
    if (nativeNum % 2 > 0 && zeroNum === 0) {
        needToActive = true;
    }
    let res = 0;
    let hasSeven = false;
    for(let i = 0; i < len; i++) {
        const cur = arr[i];
        if (cur < 0) {
            if (needToActive && cur === minNative) {
                res += Math.abs(cur - 1);
                needToActive = false;
                continue;
            }
            if (cur === max && !hasSeven) {
                res += Math.abs(cur - (-7));
                hasSeven = true;
            } else {
                res += Math.abs(cur - (-1));
            }
        } else if (cur === 0) {
            res += 1;
        } else {
            if (cur === max && !hasSeven) {
                res += Math.abs(cur - 7);
                hasSeven = true;
            } else {
                res += Math.abs(cur - 1);
            }
        }
    }
    return res;
}

printsth(getSeven(num, numArr));