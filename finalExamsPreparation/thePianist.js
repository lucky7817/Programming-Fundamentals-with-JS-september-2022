function thePianist(input) {

    let numberOfPieces = Number(input.shift());
    let pieseInfo = {};

    for (let i = 0; i < numberOfPieces; i++) {
        let splitedCurrentLine = input[i].split('|');

        let piece = splitedCurrentLine[0];
        let composer = splitedCurrentLine[1];
        let key = splitedCurrentLine[2];

        pieseInfo[piece] = {
            composer: composer,
            key: key,
        };
    }

    for (let j = numberOfPieces; j < input.length; j++) {
        let currentCommandLine = input[j];

        if (currentCommandLine === 'Stop') {
            break;
        }

        currentCommandLine = input[j].split('|');

        let command = currentCommandLine[0];

        switch (command) {
            case 'Add':
                let pieceName = currentCommandLine[1];
                let composerName = currentCommandLine[2];
                let keyName = currentCommandLine[3];

                if (pieseInfo.hasOwnProperty(pieceName)) {
                    console.log(`${pieceName} is already in the collection!`);
                } else {
                    pieseInfo[pieceName] = {
                        composer: composerName,
                        key: keyName,
                    };
                    console.log(`${pieceName} by ${composerName} in ${keyName} added to the collection!`);
                }
                break;

            case 'Remove':
                let pieceToRemove = currentCommandLine[1];

                if (pieseInfo.hasOwnProperty(pieceToRemove)) {
                    delete pieseInfo[pieceToRemove];
                    console.log(`Successfully removed ${pieceToRemove}!`);
                } else {
                    console.log(`Invalid operation! ${pieceToRemove} does not exist in the collection.`);
                }
                break;

            case 'ChangeKey':
                let pieceForChange = currentCommandLine[1];
                let newKey = currentCommandLine[2];

                if (pieseInfo.hasOwnProperty(pieceForChange)) {
                    pieseInfo[pieceForChange].key = newKey;
                    console.log(`Changed the key of ${pieceForChange} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${pieceForChange} does not exist in the collection.`);
                }
                break;
        }
    }

    for (const key in pieseInfo) {
        console.log(`${key} -> Composer: ${pieseInfo[key].composer}, Key: ${pieseInfo[key].key}`);
    }
}

// thePianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ]);
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);