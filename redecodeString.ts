function decodeString(s: string): string {
    let stack: string[] = [];
    let res: string = '';
    for(const str of s) {
        if (str === ']') {
            let cur: string = '';
            let numStr: string = '';
            let tempNumber: string = '';
            while(tempNumber !== '[') {
                cur = tempNumber + cur;
                tempNumber = stack.pop();
            }
            tempNumber = stack.pop();
            while(/\d/.test(tempNumber)) {
                numStr = tempNumber + numStr;
                tempNumber = stack.pop();
            }
            stack.push(tempNumber);
            const realNum = strToNumber(numStr);
            const curStr = comStr(cur, realNum);
            stack.push(curStr);
        } else {
            stack.push(str);
        }
    }
    res = stack.join('');
    return res;
};

function strToNumber(str: string): number {
    const res: number = Number(str);
    if (Number.isNaN(res)) {
        return 0;
    }
    return res;
}

function comStr(char: string, time: number): string {
    let str = '';
    for(let i = 0; i < time; i++) {
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