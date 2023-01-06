function activationKeys(input) {

    let activationCode = input.shift();

    let commandLine = input.shift();

    while (commandLine !== 'Generate') {

        let splitedCommandLine = commandLine.split('>>>');
        let command = splitedCommandLine.shift();

        switch (command) {
            case 'Contains':
                let substringData = splitedCommandLine[0];

                if (activationCode.includes(substringData)) {
                    console.log(`${activationCode} contains ${substringData}`);
                } else {
                    console.log('Substring not found!');
                }
                break;

            case 'Flip': 
                let letterSize = splitedCommandLine[0];
                let startIndex = Number(splitedCommandLine[1]);
                let endIndex = Number(splitedCommandLine[2]);

                let partOfCode = activationCode.substring(startIndex, endIndex);
                let newPartOfCode = letterSize == 'Upper' ? partOfCode.toUpperCase() : partOfCode.toLowerCase();
                activationCode = activationCode.replace(partOfCode, newPartOfCode);
                console.log(activationCode);
                break;
            
            case 'Slice':
                let startIndexSlice = Number(splitedCommandLine[0]);
                let endIndexSlice = Number(splitedCommandLine[1]);

                let substringForDelete = activationCode.substring(startIndexSlice, endIndexSlice);
                activationCode = activationCode.replace(substringForDelete, '');
                console.log(activationCode);
                break;
        }

        commandLine = input.shift();
    }
    console.log(`Your activation key is: ${activationCode}`);
}

activationKeys((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]));