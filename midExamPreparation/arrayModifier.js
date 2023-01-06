function arrayModifier(array) {

    let arrayToModify = array.shift().split(' ').map(x => Number(x));

    let currentCommand = array.shift();

    while (currentCommand != 'end') {

        currentCommand = currentCommand.split(' ');
        let command = currentCommand[0];
        let firstNum = Number(currentCommand[1]);
        let secondNum = Number(currentCommand[2]);
        let copyArray = arrayToModify.slice();
        let sum = 0;

        switch (command) {
            case 'swap':
                //copyArray = arrayToModify.slice();
                arrayToModify.splice(secondNum, 1, copyArray[firstNum]);
                arrayToModify.splice(firstNum, 1, copyArray[secondNum]);
                break;

            case 'multiply':
                sum = copyArray[firstNum] * copyArray[secondNum];
                arrayToModify.splice(firstNum, 1, sum);
                break;

            case 'decrease':
                for (let i = 0; i < arrayToModify.length; i++) {
                    arrayToModify[i] -= 1;   
                }
                break;
        }
        currentCommand = array.shift();
    }
    console.log(arrayToModify.join(', '))
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
