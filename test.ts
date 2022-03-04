function repeatedStringMatch(a: string, b: string): number {
    let aLen = a.length, bLen = b.length;
    let newA = '', multi = 0;
    while(newA.length < bLen) {
        newA += a;
        multi++;
    }
    let index = checkIndex(newA + a, b);
    if (index < 0) return -1;
    return index + bLen > aLen * multi ? multi + 1 : multi;

};
function checkIndex(a: string, b: string): number {
    let next = [];
    let aLen = a.length, bLen = b.length;
    for(let i = 1, j = 0;i <= bLen;i++) {
        while(j > 0 && b[j] !== b[i]) j = next[j - 1];
        if (b[j] === b[i]) {
            j++;
            next[i - 1] = j - 1;
        } else {
            next[i - 1] = j;
        }
    }
    for (let i = 0, j = 0;i < aLen; i++) {
        while(j > 0 && a[i] !== b[j]) j = next[j];
        if (a[i] === b[j]) {
            j++;
        }
        if (j + 1 === bLen) return i;
    }
    return -1;
}

repeatedStringMatch('a', 'aa');