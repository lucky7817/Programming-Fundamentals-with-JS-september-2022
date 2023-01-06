function lastKNumbersSequence(n, k) {

    let result = [1, 1, 2];
    let sum2 = 0;
    let sumToArray = [1, 1, 2];
    let count = 0;

    if (n === 1 && k === 1) {
        console.log((result = [2]).join('')); return;
    } else if (n === 0 && k === 1 || n === 1 && k === 0 || n === 0 && k === 0 || n === 0 && k === 2 || n === 0) {
        console.log((result = [0]).join('')); return;
    } else if (n === 2 && k === 2 || n === 2 && k ===1 || n === 2 && k ===0){
        console.log((result = [1, 1]).join(' ')); return;
    } 

    while (result.length != n) {
        
        for (let i = sumToArray.length - 1; i <= sumToArray.length - 1; i--) {
            let currentSumNum = sumToArray[i];
            sum2 += currentSumNum;
            count++;

            if (count === k) {
                sumToArray.push(sum2)
                result.push(sum2);
                sum2 = 0;
                count = 0; break;
            }
        }
    }
    console.log(result.join(' '));
}

//lastKNumbersSequence(2, 1);
//lastKNumbersSequence(6, 3);
lastKNumbersSequence(3, 3);