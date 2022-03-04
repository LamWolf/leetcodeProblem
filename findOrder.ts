function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const outDegree: Set<number>[] = new Array(numCourses);
    for(let i = 0; i < numCourses; i++) {
        outDegree[i] = new Set();
    }
    const inDegree: number[] = new Array(numCourses).fill(0);
    // save all dependencies
    for(const item of prerequisites) {
        outDegree[item[1]].add(item[0]);
        inDegree[item[0]]++;
    }
    let queue: number[] = [];
    for(let i = 0; i < numCourses; i++) {
        if(inDegree[i] === 0) queue.push(i);
    }
    console.log(outDegree);
    console.log(inDegree);
    console.log(queue);
    const res = [];
    while(queue.length > 0) {
        const cur: number = queue[0];
        res.push(cur);
        queue = queue.slice(1);
        for(const item of outDegree[cur]) {
            inDegree[item]--;
            if(inDegree[item] === 0) {
                queue.push(item);
            }
        }
    }
    if (res.length === numCourses) {
        return res;
    }
    return [];
};

console.log(findOrder(2, [[1, 0]]));