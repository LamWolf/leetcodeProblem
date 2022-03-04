function repeatedStringMatch(a, b) {
    var aLen = a.length, bLen = b.length;
    var newA = '', multi = 0;
    while (newA.length < bLen) {
        newA += a;
        multi++;
    }
    var index = checkIndex(newA + a, b);
    if (index < 0)
        return -1;
    return index + bLen > aLen * multi ? multi + 1 : multi;
}
;
function checkIndex(a, b) {
    var next = [];
    var aLen = a.length, bLen = b.length;
    for (var i = 1, j = 0; i <= bLen; i++) {
        while (j > 0 && b[j] !== b[i])
            j = next[j - 1];
        if (b[j] === b[i]) {
            j++;
            next[i - 1] = j - 1;
        }
        else {
            next[i - 1] = j;
        }
    }
    for (var i = 0, j = 0; i < aLen; i++) {
        while (j > 0 && a[i] !== b[j])
            j = next[j];
        if (a[i] === b[j]) {
            j++;
        }
        if (j + 1 === bLen)
            return i;
    }
    return -1;
}
repeatedStringMatch('a', 'aa');
