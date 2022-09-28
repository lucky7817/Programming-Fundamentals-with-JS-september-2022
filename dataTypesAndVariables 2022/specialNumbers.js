function specialNumbers(number) {

    let buff = '';
    let sum = 0;

    for (let j = 1; j <= number; j++) {
        buff = j + ' ' + '-' + '>' + ' ';
        let currentDigitToString = j.toString();

        for (let g = 0; g < currentDigitToString.length; g++) {
            let currentStringToDigit = Number(currentDigitToString[g]);

            sum += currentStringToDigit; continue;    
        }

        if (sum === 5 || sum === 7 || sum === 11) {
            buff = buff + 'True' + '';
            sum = 0;

        } else {
            buff = buff + 'False' + '';
            sum = 0;
        }

        console.log(buff);

    }


}

specialNumbers(15)