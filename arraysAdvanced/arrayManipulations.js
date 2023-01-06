function arrayManipulations(array) {

    let arrayOfNum = array.shift().split(' ').map(Number);

    for (let i = 0; i < array.length; i++) {
        let [command, firstNum, secondNum] = array[i].split(' ');

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case 'Add': arrayOfNum.push(firstNum);
                break;
            case 'Remove': arrayOfNum.filter(el => el !== firstNum); break;
            case 'RemoveAt': break;
            case 'Insert': break;
        }

        // function remove(num) {
        //     arrayOfNum.filter(el => el !== num);
        //     return arrayOfNum;
        // }
        // let removeNum = remove(firstNum);

        // function removeAt(index) {
        //     arrayOfNum.splice(index, 1);
        // }

        // function insert(num, index) {
        //     arrayOfNum.splice(index, 0, num);
        // }
        

    }

    console.log(arrayOfNum);

}

arrayManipulations(['4 19 2 53 6 43',

    'Add 3',

    'Remove 2',

    'RemoveAt 1',

    'Insert 8 3'])