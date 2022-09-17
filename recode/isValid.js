function isValid(s) {
    const n = s.length;
    if (n < 2)
        return false;
    const stack = [];
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let i = 0; i < n; i++) {
        const cur = s[i];
        if (cur === '(' || cur === '{' || cur === '[') {
            stack.push(cur);
        }
        else {
            if (stack.length === 0) {
                return false;
            }
            const top = stack.pop();
            if (top !== bracketMap[cur]) {
                return false;
            }
        }
    }
    return true;
}
;
// ()[]{}
console.log(isValid('()[]{}'));
