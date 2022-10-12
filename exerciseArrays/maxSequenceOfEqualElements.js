function maxSequenceOfEqualElements(array) {

    let currentEqualElements = [];
    let compareArray = [];
    let maxLengthArray = [];
    let iNext = 0;
    let firstEqualElements = [];

    for (let i = 0; i < array.length - 1; i = iNext) {
        let currentNumFirst = Number(array[i]);

        for (let j = 1 + i; j < array.length; j++) {
            let currentNumSecond = Number(array[j]);

            iNext = j;

            if (currentNumFirst === currentNumSecond) {
                currentEqualElements.push(currentNumFirst, currentNumSecond);

                if (currentEqualElements.length > compareArray.length) {
                    maxLengthArray = currentEqualElements;

                    if (currentEqualElements.length > 2) {
                        maxLengthArray = currentEqualElements;
                        maxLengthArray.shift();
                    }
                } else if (compareArray.length > currentEqualElements.length) {
                    maxLengthArray = compareArray;
                } else {
                    maxLengthArray = currentEqualElements;
                }
            } else {
                compareArray = maxLengthArray;
                currentEqualElements = []; break;
            }
        }
    }
    
    if (maxLengthArray.length === firstEqualElements.length) {
        console.log(firstEqualElements.join(' '));
    } else {
        console.log(maxLengthArray.join(' '));
    }

}

//maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
//maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
//maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);