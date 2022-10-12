function printNthElement(array) {

    let lengthArray = Number(array.length - 1);
    let step = Number(array[lengthArray]);
    let elementOfArrayWithStep = '';

    for (let i = 0; i < array.length; i = i + step) {

        while (i != array.length - 1) {
            elementOfArrayWithStep += array[i] + ' '; break;
           
        }
    }
    console.log(elementOfArrayWithStep);


}

//printNthElement(['5', '20', '31', '4', '20', '2']);
//printNthElement(['dsa', 'asd', 'test', 'test', '2']);
printNthElement(['1', '2', '3', '4', '5', '6']);