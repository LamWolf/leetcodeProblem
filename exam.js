let maxChip = parseInt(inputArray[0]);
    
let aID = 0;
    let bID = 0;
    let aCon = 0;
    for(let i = 0;i < n; i++) {
        let cur = step[i];
        let curMax = Math.max(aID, bID);
        if (cur === 'A') {
            if (aID === 0) {
                aID = curMax + 1;
            }
            if (aCon === 4) {
                aCon = 1;
                aID = curMax + 1;
            } else {
                ++aCon;
            }
        } else {
            bID = curMax + 1;
        }


        if (aID > maxChip || bID > maxChip) {
            console.log(0);
            console.log(0);
            break;
        }
        if (i === n - 1) {
            if (cur === 'A') {
                console.log(aID);
                console.log(aCon);
            } else {
                console.log(bID);
                console.log(1);
            }
        }
    }





    let storage = new Array(maxChip).fill(0);
    let aCursor = 0;
    let bCursor = 0;
    let maxCursor = 0;
    for (const item of step) {
        if (item === 'A') {
            let curA = storage[aCursor];
            if (curA < 4) {
                storage[aCursor] += 1;
            } else {
                aCursor = maxCursor + 1;
                if (aCursor >= maxChip) {
                    console.log(0);
                    console.log(0);
                    break;
                }
                storage[aCursor] = 1;
                maxCursor = aCursor;
            }
        } else {
            bCursor = maxCursor + 1;
            if (bCursor >= maxChip) {
                console.log(0);
                console.log(0);
                break;
            }
            storage[bCursor] = 1;
            maxCursor = bCursor;
        }
    }
    if (aCursor < maxCursor && bCursor < maxCursor) {
        console.log(maxCursor + 1);
        console.log(storage[maxCursor]);
    }