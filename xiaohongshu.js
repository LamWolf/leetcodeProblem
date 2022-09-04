// function Q1(n, m, k, numArr) {
//     let curArr = numArr.concat();
//     for(let i = 0; i < m; i++) {
//         const revArr = curArr.concat().reverse();
//         curArr = [].concat(curArr, revArr);
//         console.log(curArr);
//     }
//     return curArr[k - 1];
// }

// function Q1(n, m, k, numArr) {
//     const len = n * Math.pow(2, m);
//     let curK = k;
//     let curlen = len;
//     while(curK > n) {
//         const mid = curlen / 2;
//         if (curK > mid) {
//             curK = curlen - curK + 1;
//             curlen = mid;
//         } else {
//             curlen = mid;
//         }
//     }
//     return numArr[curK - 1];
// }

function getSeven(len, arr) {
    let nativeNum = 0;
    let activeNum = 0;
    let zeroNum = 0;
    let max = 0;
    let maxDiff = 0;
    let minNative = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < len; i++) {
        const cur = arr[i];
        let curDiff = 0;
        if (cur > 0) {
            activeNum += 1;
            if (cur === max) {
                continue;
            }
            if (cur > 7) {
                curDiff = Math.abs(cur - 7);
                if (curDiff > maxDiff) {
                    max = cur;
                    maxDiff = curDiff;
                }
            } else if (cur <= 7 && max < 7 && max > -7) {
                if (maxDiff === 0) maxDiff = Number.MAX_SAFE_INTEGER;
                curDiff = Math.abs(cur - 7);
                if (curDiff < maxDiff) {
                    max = cur;
                    maxDiff = curDiff;
                }
            }
        }
        if (cur === 0) {
            zeroNum += 1;
        }
        if (cur < 0) {
            nativeNum += 1;
            if (cur !== max) {
                if (cur < -7) {
                    curDiff = Math.abs(cur - (-7));
                    if (curDiff > maxDiff) {
                        max = cur;
                        maxDiff = curDiff;
                    }
                } else if (cur >= -7 && max > -7 && max < 7) {
                    if (maxDiff === 0) maxDiff = Number.MAX_SAFE_INTEGER;
                    curDiff = Math.abs(cur - (-7));
                    if (curDiff < maxDiff) {
                        max = cur;
                        maxDiff = curDiff;
                    }
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
    console.log('needTo', needToActive);
    console.log(max);
    console.log(minNative);
    console.log('======');
    for(let i = 0; i < len; i++) {
        const cur = arr[i];
        if (cur < 0) {
            if (needToActive && cur === minNative) {
                res += Math.abs(1 - cur);
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
        console.log(res);
    }
    return res;
}

console.log(getSeven(5, [-7, -7, -7, 2, 3]))