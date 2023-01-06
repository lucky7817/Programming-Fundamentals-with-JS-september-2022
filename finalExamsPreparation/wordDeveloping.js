function wordDeveloping(input) {

    let sentence = ''

    let currentLine = input.shift();
    let newSentence = sentence.slice();
    let occurIndex = [];

    while (currentLine !== 'End') {
        let splitedLine = currentLine.split(' ');

        let command = splitedLine[0];

        switch (command) {
            case 'Add':
                newSentence += splitedLine[1] + ' '.trimEnd();
                sentence = newSentence
                break;

            case 'Upgrade':
                let char = splitedLine[1];
                let charInAsciiNum = char.charCodeAt();
                let nextAsciiNum = charInAsciiNum + 1;
                let nextAsciiChar = String.fromCharCode(nextAsciiNum);

                for (let i = 0; i < sentence.length; i++) {
                    let currentChar = sentence[i];

                    while (currentChar === char) {
                        //let index = sentence.indexOf(currentChar);
                        newSentence = sentence.replaceAll(currentChar, nextAsciiChar);
                        break;
                    }
                }
                sentence = newSentence;
                break;

            case 'Print':
                console.log(sentence);
                break;

            case 'Index':
                let charToBeFind = splitedLine[1];

                for (let i = 0; i < sentence.length; i++) {

                    if (sentence[i] === charToBeFind) {
                        occurIndex.push(i)
                        continue;
                    }
                }
                if (occurIndex.length === 0) {
                    console.log('None');
                } else {
                    console.log(occurIndex.join(' '));
                }
                break;

            case 'Remove':
                let substringToBeRemove = splitedLine[1];

                if (sentence.includes(substringToBeRemove)) {
                    newSentence = sentence.replace(substringToBeRemove, '');
                }
                sentence = newSentence;
                break;
        }
        currentLine = input.shift();
    }

}

wordDeveloping(["Add Univnersity",
    "Print",
    "Upgrade n",
    "Print",
    "Index i",
    "Remove sity",
    "Print",
    "End"]);
