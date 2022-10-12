function addAndSubtract(numbers) {

    let sumOriginArray = 0;
    let sumNewArray = 0;
    let newArray = [];
    let buff = '';

    for (let i = 0; i < numbers.length; i++) {
        let currentNum = Number(numbers[i]);
        sumOriginArray += currentNum;

        if (currentNum % 2 === 0) {
            currentNum = currentNum + i;
            newArray.push(currentNum);
            if (i != numbers.length - 1) {
                buff += ' ' + currentNum + ',';
            } else {
                buff += ' ' + currentNum + ' ';
            }

        } else {
            currentNum = currentNum - i;
            newArray.push(currentNum);
            if (i != numbers.length - 1) {
                buff += ' ' + currentNum + ',';
            } else {
                buff += ' ' + currentNum + ' ';
            }

        }

    }

    for (let j = 0; j < newArray.length; j++) {
        let currentNumNewArray = newArray[j];
        sumNewArray += currentNumNewArray;
    }
    console.log(`[${buff}]`);
    console.log(sumOriginArray);
    console.log(sumNewArray);
}

//addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);
