function equalArrays(firstArray, secondArray) {

    let sum = 0;
    let diffArray = 0;
    let currentNumFirst = 0;
    let currentNumSecond = 0;
    let countNum = 0;
    let indexNum = 0;

    for (let i = 0; i < firstArray.length; i++) {
        currentNumFirst = Number(firstArray[i]);
        countNum++;

        for (let j = 0 + i; j < secondArray.length; j++) {
            currentNumSecond = Number(secondArray[j]);


            if (currentNumFirst === currentNumSecond) {
                sum += currentNumFirst; break;
            } else {
                indexNum = j;
                diffArray++; break;

            }
        }

    }

    if (diffArray === 0) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${indexNum} index`);
    }

}

// equalArrays(['10','20','30'],['10','20','30']);
// equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10']);
