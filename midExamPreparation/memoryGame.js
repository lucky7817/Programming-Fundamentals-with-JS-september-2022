function memoryGame(input) {

    let elements = input.shift().split(' ');
    let midLengthElements = (elements.length / 2) - 1;
    let movesCounter = 0;
    let noMatchesCounter = 0;

    let currentLine = input.shift();

    while (currentLine !== 'end') {
        let arrCurrentLine = currentLine.split(' ');

        let firstIndex = Number(arrCurrentLine[0]);
        let lastIndex = Number(arrCurrentLine[1]);

        let elOnFirstIndex = elements[firstIndex];
        let elOnLastIndex = elements[lastIndex];

        if (elOnFirstIndex === elOnLastIndex && elOnFirstIndex !== undefined && elOnLastIndex !== undefined) {
            movesCounter++;

            let minIndex = Math.min(firstIndex, lastIndex);
            let maxIndex = Math.max(firstIndex, lastIndex) - 1;

            elements.splice(minIndex, 1);
            elements.splice(maxIndex, 1);

            console.log(`Congrats! You have found matching elements - ${elOnFirstIndex}!`);

        } else if (elOnFirstIndex !== elOnLastIndex && elOnFirstIndex !== undefined && elOnLastIndex !== undefined) {
            console.log('Try again!');
        } else if (firstIndex < 0 || lastIndex < 0 || elements[firstIndex] === undefined || elements[lastIndex] === undefined) {

            movesCounter++;
            let nameAddEl = '-' + movesCounter + 'a';
            elements.splice(midLengthElements, 0, nameAddEl, nameAddEl);
            console.log('Invalid input! Adding additional elements to the board');
            noMatchesCounter++;
        }
        // } else {
        //     console.log('Try again!');
        // }

        let lengthElements = elements.length;

        if (lengthElements === 0) {
            console.log(`You have won in ${movesCounter - noMatchesCounter} turns!`);
            break;
        }
        currentLine = input.shift();
    }

    if (elements.length > 0) {
        console.log('Sorry you lose :(');
        console.log(elements.join(' '));
    }
}

// memoryGame([
//     "1 1 2 2 3 3 4 4 5 5",
//     "1 0",
//     "-1 0",
//     "1 0",
//     "1 0",
//     "1 0",
//     "end"
// ]);
memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);
// memoryGame([
//     "a 2 4 a 2 4",
//     "4 0",
//     "0 2",
//     "0 1",
//     "0 1",
//     "end"
// ]);