function factorialDivision(firstNum, secondNum) {

    
    function factorialOfFirstNum(first) {
        let firstFactorialSum = 1;
        for (let i = 1; i <= first; i++) {
            firstFactorialSum = firstFactorialSum * i;
        }
        return firstFactorialSum;
    }
    let resultSumOfFirstNum = factorialOfFirstNum(firstNum);

    function factorialOfSecondNum(second) {
        let secondFactorialSum = 1;
        for (let i = 1; i <= second; i++) {
            secondFactorialSum *= i;
        }
        return secondFactorialSum;
    }
    let resultSumOfSecondNum = factorialOfSecondNum(secondNum);


    let divideFirstBySecond = resultSumOfFirstNum / resultSumOfSecondNum;
    console.log(divideFirstBySecond.toFixed(2));

}

factorialDivision(5, 2);

