function magicSum(array, num) {

    let sumPairNum = 0;

    for ( let i = 0; i < array.length; i++) {
        let currentNum1 = Number(array[i]);

        for (let j = 1 + i; j < array.length; j++) {
            let currentNum2 = Number(array[j]);

            sumPairNum = currentNum1 + currentNum2;

            if (sumPairNum === num) {
                console.log(currentNum1 + ' ' + currentNum2);
                sumPairNum = 0;
            }
        }
    }
}

//magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);