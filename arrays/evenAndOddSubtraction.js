function evenAndOddSubtraction(numbers) {

    let sumEvenNum = 0;
    let sumOddNum = 0;

    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i];

        if (currentNum % 2 === 0) {
            sumEvenNum += currentNum;
        } else {
            sumOddNum += currentNum;
        }
    }
    let result = sumEvenNum - sumOddNum;

    console.log(result);
    

}

//evenAndOddSubtraction([1,2,3,4,5,6]);
evenAndOddSubtraction([3,5,7,9]);