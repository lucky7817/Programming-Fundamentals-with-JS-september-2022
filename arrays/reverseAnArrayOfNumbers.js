function reverseAnArrayOfNumbers(coutNumToReverse, arrayOfNum) {

    let result = ' ';

    for (let i = coutNumToReverse -1; i >= 0; i--) {
        result += arrayOfNum[i] + ' ';  
    }
    console.log(result);
    
}

//reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);