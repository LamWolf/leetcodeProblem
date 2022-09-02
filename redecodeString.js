function decodeString(s) {
    let stack = [];
    let res = '';
    for (const str of s) {
        if (str === ']') {
            let cur = '';
            let numStr = '';
            let tempNumber = '';
            while (tempNumber !== '[') {
                cur = tempNumber + cur;
                tempNumber = stack.pop();
            }
            tempNumber = stack.pop();
            while (/\d/.test(tempNumber)) {
                numStr = tempNumber + numStr;
                tempNumber = stack.pop();
            }
            stack.push(tempNumber);
            const realNum = strToNumber(numStr);
            const curStr = comStr(cur, realNum);
            stack.push(curStr);
        }
        else {
            stack.push(str);
        }
    }
    res = stack.join('');
    return res;
}
;
function strToNumber(str) {
    const res = Number(str);
    if (Number.isNaN(res)) {
        return 0;
    }
    return res;
}
function comStr(char, time) {
    let str = '';
    for (let i = 0; i < time; i++) {
        str += char;
    }
    return str;
}
console.log(decodeString('abc3[cd]xyz'));
// "aaabcbc"
// abcabccdcdcdef
// abcabccdcdcdef
// abccdcdcdxyz
// abccdcdcdxyz
