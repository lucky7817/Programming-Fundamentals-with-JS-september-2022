function addAndSubtract(firstNum, secondNum, thirdNum) {

    function sum(first, second) {
        let result1 = first + second;
        return result1;
    }
    let firstResult = sum(firstNum, secondNum);


    function subtract(sumOfTwoInteger, third) {
        let result2 = sumOfTwoInteger - third;
        return result2;
    }
    let totalResult = subtract(firstResult, thirdNum);

    console.log(totalResult);

}
addAndSubtract(23, 6, 10)
