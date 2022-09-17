function isValid(s: string): boolean {
    const n = s.length;
    if (n < 2) return false;
    const stack: string[] = [];
    const bracketMap = {
        ')' : '(',
        '}': '{',
        ']': '['
    }
    for(let i = 0; i < n; i++) {
        const cur: string = s[i];
        if (cur === '(' || cur === '{' || cur === '[') {
            stack.push(cur);
        } else {
            if (stack.length === 0) {
                return false;
            }
            const top = stack.pop();
            if (top !== bracketMap[cur]) {
                return false;
            }
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
};

// ()[]{}
console.log(isValid('()[]{}'));