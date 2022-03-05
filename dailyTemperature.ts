interface temStructure {
    index: number;
    tem: number;
}
class Stack<T> {
    constructor() {
        this.list = [];
    }
    private list: T[];
    public size(): number {
        return this.list.length;
    }
    public peek(): T {
        let len = this.size();
        if (len < 1) return null;
        return this.list[len - 1];
    }
    public push(item): void {
        this.list.push(item);
    }
    public pop(): T {
        return this.list.pop();
    }
}
function dailyTemperatures(temperatures: number[]): number[] {
    let n: number = temperatures.length;
    if (n < 2) return [0];
    let stack: Stack<temStructure> = new Stack<temStructure>();
    let res: number[] = new Array(n).fill(0);
    for(let i = 0; i < n; i++) {
        let curTem = temperatures[i];
        while(stack.size() > 0) {
            let top = stack.peek();

            if (top.tem >= curTem) break;

            let pre = stack.pop();
            let distance = i - pre.index;
            res[pre.index] = distance;
        }
        let newTem: temStructure = {
            index: i,
            tem: curTem
        };
        stack.push(newTem);
    }
    return res;
};