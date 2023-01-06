function negativeOrPositiveNumbers(array) {

    let result = [];

    for (const element of array) {
        let numbers = Number(element);

        if (numbers < 0) {
            result.unshift(numbers);
        } else {
            result.push(numbers);
        }
    }

    for (const numbers of result) {
        console.log(numbers);
    }
}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);