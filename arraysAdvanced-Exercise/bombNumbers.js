function bombNumbers(arrayNum, bombNum) {

    let spacialBombNum = bombNum[0];
    let powerLeftAndRigth = bombNum[1];
    let sum = 0;

    for (let i = 0; i < arrayNum.length; i++) {
        let currentNum = arrayNum[i];

        if (spacialBombNum === currentNum && i <= powerLeftAndRigth) {
            arrayNum.splice(0, i);
            arrayNum.splice(i - powerLeftAndRigth, powerLeftAndRigth + 1);
            i = -1;
            continue;
        } else if (spacialBombNum === currentNum && i >= powerLeftAndRigth) {
            arrayNum.splice(i - powerLeftAndRigth, powerLeftAndRigth);
            arrayNum.splice(i - powerLeftAndRigth, powerLeftAndRigth + 1);
            i = -1;
            continue;
        }
    }

    for (let j = 0; j < arrayNum.length; j++) {
        sum += arrayNum[j];

    }
    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
//bombNumbers([1, 2, 2], [1, 1]);