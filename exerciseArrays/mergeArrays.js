function mergeArrays(firstArray, secondArray) {

    let sum = 0;
    let newArray = [];

    for (let i = 0; i < firstArray.length; i++) {

        for (let j = 0 + i; j < secondArray.length; j++) {
            
            if (i % 2 === 0) {
                sum = (Number(firstArray[i]) + Number(secondArray[j]));
                newArray.push(sum);
                sum = 0; break;

            } else {
                concatenation = firstArray[i] + secondArray[j];
                newArray.push(concatenation); break;
            }

        }

    }
    console.log(newArray.join(' - '));

}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
//mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);

