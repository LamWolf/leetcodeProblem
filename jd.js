// function Q1(num, itemStr) {
//     if (num === 1) return 0;
//     const itemArr = itemStr.split(' ').map(item => Number(item));
//     let max = 0;
//     let res = 0;
//     for(let i = 0; i < num; i++) {
//         max = Math.max(max, itemArr[i]);
//     }
//     for(let i = 0; i < num; i++) {
//         if (itemArr[i] < max) {
//             res += 1;
//         }
//     }
//     console.log(res);
// }

// function getNumber(num) {
//     let l = 0, r = num;
//     let mid = 0;
//     while(l < r) {
//         mid = l + r + 1 >> 1;
//         if (Math.pow(mid, 2) > num) {
//             r = mid - 1;
//         } else {
//             l = mid;
//         }
//     }
//     console.log(mid);
//     for(let i = mid; i <= num; i++) {
//         if (num % i === 0 && ((i * i) > num)) {
//             return i;
//         }
//     }
// }

function getMinNum(num, dp) {
    const floor = Math.floor(Math.sqrt(num));
    let min = Number.MAX_SAFE_INTEGER;
    for(let i = 1; i <= floor; i++) {
        if (num % i === 0) {
            if (i === 1) {
                min = Math.min(min, dp[1] + dp[num - 1] + 1);
            } else {
                min = Math.min(min, dp[i] + dp[num/i] + 1);
            }
        }
    }
    return min;
}

function getCount(len, arr) {
    let max = 0;
    for(let i = 0; i < len; i++) {
        max = Math.max(arr[i], max);
    }
    console.log(max);
    const dp = new Array(max + 1).fill(0);
    dp[1] = 0;
    dp[2] = 1;
    for(let i = 3; i <= max; i++) {
        dp[i] = getMinNum(i, dp);
    }
    let res = 0;
    for(let i = 0; i < len; i++) {
        res += dp[arr[i]];
    }
    return res;
}

console.log(getCount(1, [5]));