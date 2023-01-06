function numbers(numbers) {

    let stringToArrayOfNums = numbers.split(' ').map(x => Number(x));
    let resultArray = [];

    function averageSumArr(nums) {
        let sum = 0;

        for (let i = 0; i < stringToArrayOfNums.length; i++) {
            sum += stringToArrayOfNums[i] / stringToArrayOfNums.length;
        }
        return Number(sum.toPrecision(5));
    }
    let avrSumArr = averageSumArr(numbers);


    for (let j = 0; j < stringToArrayOfNums.length; j++) {

        if (stringToArrayOfNums[j] > avrSumArr) {

            resultArray.push(stringToArrayOfNums[j]);
        }
    }

    if (resultArray.length === 0) {
        console.log('No');
    } else {
        resultArray.sort((a, b) => {
            return b - a;
        });
        resultArray.length = 5;
        console.log(resultArray.join(' '));
    }
}

//numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');