function maxNumber(array) {

    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        let isBigger = true;
        let currentNum = array[i];

        for ( let j = i + 1; j < array.length; j++) {
            if (currentNum <= array[j]) {
                isBigger = false;
            }

        }
        if (isBigger) {
            resultArray.push(array[i]);

        }
    }

    console.log(resultArray.join(' '));

}

//maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);