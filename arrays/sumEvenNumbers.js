function sumEvenNumbers(arrayOfStrings) {

    let sum = 0;

    for (let i = 0; i < arrayOfStrings.length; i++) {
        let currentStringToNum = Number(arrayOfStrings[i]);

        if (currentStringToNum % 2 === 0) {
            sum += currentStringToNum;

        }
    }
    console.log(sum);

}

//sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
sumEvenNumbers(['3','5','7','9']);