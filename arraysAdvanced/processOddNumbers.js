function processOddNumbers(array) {

    let lenghtArray = array.length;
    let result = [];

    for (let i = 0; i < lenghtArray; i++) {
        if (i % 2 != 0) {
            let currentNum = array[i] * 2;
            result.unshift(currentNum);
        }
    }
    console.log(result.join(' '))
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);