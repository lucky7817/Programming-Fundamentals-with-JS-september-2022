function movingTarget(array) {

    let targets = array.shift().split(' ').map(x => Number(x));

    let currentLine = array.shift();

    while (currentLine !== 'End') {

        let currentCommand = currentLine.split(' ');
        let command = currentCommand[0];
        let firstNum = Number(currentCommand[1]);
        let secondNum = Number(currentCommand[2]);

        switch (command) {
            case 'Shoot':
                if (targets[firstNum]) {
                    targets[firstNum] -= secondNum;

                    if (targets[firstNum] <= 0) {
                        targets.splice(firstNum, 1);
                    }
                }
                break;

            case 'Add':
                if (targets[firstNum]) {
                    targets.splice(firstNum, 0, secondNum);
                } else {
                    console.log('Invalid placement!');
                }
                break;

            case 'Strike':
                if (targets[firstNum - secondNum] && targets[firstNum + secondNum]) {
                    let startIndex = firstNum - secondNum;
                    let endIndex = firstNum + secondNum;
                    let indicesCount = (endIndex + 1) - startIndex;

                    targets.splice(startIndex, indicesCount);
                } else {
                    console.log('Strike missed!');
                }
                break;
        }
        currentLine = array.shift();
    }
    console.log(targets.join('|'))
}

// movingTarget(["52 74 23 44 96 110",
//     "Shoot 5 10",
//     "Shoot 1 80",
//     "Strike 2 1",
//     "Add 22 3",
//     "End"]);
movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"]);
