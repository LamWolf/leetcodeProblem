function numberOfWeakCharacters(properties) {
    var n = properties.length;
    var maxAttack = 0;
    properties.forEach(function (item) { return maxAttack = Math.max(maxAttack, item[0]); });
    var attacks = new Array(maxAttack + 1).fill(0);
    properties.forEach(function (item) { return attacks[item[0]] = Math.max(attacks[item[0]], item[1]); });
    var max = 0;
    for (var i = maxAttack; i >= 0; i--) {
        var tempAttack = attacks[i];
        attacks[i] = max;
        if (tempAttack > max)
            max = tempAttack;
    }
    console.log(attacks);
    var res = 0;
    properties.forEach(function (item) {
        console.log(item);
        if (item[1] < attacks[item[0]])
            res++;
    });
    return res;
}
;
console.log(numberOfWeakCharacters([[1, 1], [2, 1], [2, 2], [1, 2]]));
