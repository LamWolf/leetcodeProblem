function yuanfudao (k: number, arr: number[]): number {
    const newArr = arr.sort();
    const ansArr = getAnsArr(k);
    const ansLength: number = ansArr.length;
    let ansCur: number = ansArr[0];
    let targetIndex: number = 0;
    let count: number = 0;
    let index: number = 0;
    while (index < arr.length) {
        if (newArr[index] === ansCur) {
            count += 1;
            index += 1;
        } else if (newArr[index] > ansCur) {
            targetIndex += 1;
            if (targetIndex < ansLength) {
                ansCur = ansArr[targetIndex];
            } else {
                break;
            }
        } else {
            index += 1;
        }
    }
    if (targetIndex < ansLength - 1) {
        return 0;
    }
    return count;
}

function getAnsArr (k: number): number[] {
    const res: number[] = [];
    let newK: number = k;
    for (let i = 2; i <= newK; i++) {
        if (newK % i === 0) {
            newK = newK / i;
            res.push(i);
            i = 1;
        }
    }
    return res;
}

// function isNumber(num: number): boolean {
//     if (typeof num !== 'number' || num <= 1) return false;
//     let n = parseInt(Math.sqrt(num).toString());
//     for (let i = 2; i < n; i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

const K = 20;
// const arr = [1, 2, 3, 2, 6, 5, 2, 1];
const arr = [1,4,5,7,10,8,7,17,2,8];

// console.log(yuanfudao(K, arr));
console.log(getAnsArr(K));