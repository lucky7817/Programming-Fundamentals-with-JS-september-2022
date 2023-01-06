function searchForANumber(numArr, actions) {

    let howNumToTake = actions[0];
    let deleteNum = actions[1];
    let spacialNum = actions[2];

    let takenNum = numArr.slice(0, howNumToTake);
    takenNum.splice(0, deleteNum);

    let count = 0;

    for (const num of takenNum) {

        if (num === spacialNum) {
            count++;
        }
    }
    console.log(`Number ${spacialNum} occurs ${count} times.`);

}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);