function negativeOrPositiveNumbers(array) {

    let result = [];
    let lengthArray = array.length;
    array = array.map(Number);

    for (let i = 0; i < lengthArray; i++) {

        if (array[i] < 0) {
            result.unshift(array[i]);
        } else {
            result.push(array[i])
        }   
    }

    for (const array of result)
    console.log(array);
}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);