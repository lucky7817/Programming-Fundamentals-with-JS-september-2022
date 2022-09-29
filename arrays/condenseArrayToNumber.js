function condenseArrayToNumber(numbers) {

    let sum = 0;
    let allSum = 0;
    let secondSum = 0;
    let newArray = [];
    let buff = [];

    if (numbers.length === 1) {
        console.log(numbers[0]);
        return;
    }

    for (let i = 0; i < numbers.length - 1; i++) {
        let numSum1 = numbers[i];

        for (let j = 1 + i; j < numbers.length; j++) {
            let numSum2 = numbers[j];
            sum = numSum1 + numSum2;
            newArray.push(sum);
            allSum += numSum1 + numSum2;
            break;
        }
    }

    while (newArray.length != 1) {
        allSum = 0;
        buff = [];
        for (let i = 0; i < newArray.length; i++) {
            numSum1 = newArray[i];

            for (let j = 1 + i; j < newArray.length; j++) {
                numSum2 = newArray[j];
                sum = numSum1 + numSum2;
                buff.push(sum);
                allSum += numSum1 + numSum2;
                if (j === newArray.length - 1) {
                    newArray = buff;
                    break;
                }
                break;

            }


        }

    }

    console.log(allSum);

}

//condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
//condenseArrayToNumber([1]);
