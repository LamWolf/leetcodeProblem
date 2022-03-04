function numberOfWeakCharacters(properties: number[][]): number {
    let n = properties.length;
    let maxAttack = 0;
    properties.forEach(item => maxAttack = Math.max(maxAttack, item[0]));

    const attacks: number[] = new Array<number>(maxAttack + 1).fill(0);
    properties.forEach(item => attacks[item[0]] = Math.max(attacks[item[0]], item[1]));

    let max = 0;
    for(let i = maxAttack; i >=0; i--) {
        let tempAttack = attacks[i];
        attacks[i] = max;
        if (tempAttack > max) max = tempAttack;
    }
    console.log(attacks);

    let res = 0;
    properties.forEach((item) => {
        console.log(item);
        if (item[1] < attacks[item[0]]) res ++;
    })
    return res;
};

console.log(numberOfWeakCharacters([[1,1],[2,1],[2,2],[1,2]]));