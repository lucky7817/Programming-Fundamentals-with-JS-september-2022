function rotateArray(array) {

    let timesRotations = Number(array[array.length - 1]);
    let newArray = [];
    let countRotations = 0;
    let arrayLengthForSecondLoop = array.length - 2;

    for (let i = array.length - 2; i < array.length + 1;) {
        newArray = [];
        let currentElement = array[i];
        newArray.push(currentElement);
        countRotations++;

        if (countRotations > 1) {
            arrayLengthForSecondLoop = array.length - 1;
        }

        for (let j = 0; j < arrayLengthForSecondLoop; j++) {
            let currentElementSecond = array[j];
            newArray.push(currentElementSecond);
        }
        if (countRotations < timesRotations) {
            array = newArray;
            continue;
        } else {
            break;
        }
    }
    array = newArray;
    console.log(array.join(' '));
}

// rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);