// function Q1(a, b) {
//     let res = 0;
//     if (a < 11) {
//         res = 11 - a;
//         if (a - b < 2) {
//             res += 1;
//         }
//     } else {
//         if (a < b) {
//             res = 3;
//         } else if (a === b) {
//             res = 2;
//         } else {
//             res = 1;
//         }
//     }
//     return res;
// }

function Q2 (num, idArr, charArr) {
    const map = new Array(num + 1).fill(0).map(item => []);
    for(let i = 0; i < charArr.length; i++) {
        if (i === 0) continue;
        const curId = i + 1;
        const parentIdIndex = idArr[i - 1];
        map[parentIdIndex].push(curId);
    }
    let res = '';
    console.log(map);
    for(let i = 1; i < map.length; i++) {
        console.log(i);
        res = `${res} ${checkChar(i, map, {}, charArr)}`
    }
    console.log(res.trim());
}

function checkChar(id, map, existedMap, charMap) {
    const curChar = charMap[id - 1];
    let res = 0;
    if (!existedMap[curChar]) {
        res += 1;
        existedMap[curChar] = true;
    }
    const child = map[id] || [];
    for(let i = 0; i < child.length; i++) {
        const childId = child[i];
        const childChar = charMap[childId - 1];
        if (!existedMap[childChar]) {
            res += 1;
            existedMap[childChar] = true
        }
        res += checkChar(childId, map, existedMap, charMap);
    }
    return res;
}


Q2(7, [1,1,1,1,2,3], 'ABCDEFG');