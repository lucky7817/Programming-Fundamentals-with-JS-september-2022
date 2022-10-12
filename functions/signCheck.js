function signCheck(firstNum, secondNum, thirdNum) {

    let returnResultOfTwo = resultOfTwoNumbers(firstNum, secondNum);

    let result = '';

    if (thirdNum > 0 && returnResultOfTwo === 'Positive') {
        result = 'Positive';
    } else if (thirdNum < 0 && returnResultOfTwo === 'Positive') {
        result = 'Negative';
    } else if (thirdNum > 0 && returnResultOfTwo === 'Negative') {
        result = 'Negative';
    } else if (thirdNum < 0 && returnResultOfTwo === 'Negative') {
        result = 'Positive';
    }

    console.log(result);

    function resultOfTwoNumbers(first, second) {

        if (first > 0 && second > 0) {
            return 'Positive';
        } else if (first < 0 && second > 0) {
            return 'Negative';
        } else if (first > 0 && second < 0) {
            return 'Negative';
        } else if (first < 0 && second < 0) {
            return 'Positive';
        }
    }
}

//signCheck(5, 12, -15);
//signCheck(-6, -12, 14);
//signCheck(-1, -2, -3);
signCheck(-5, 1, 1);