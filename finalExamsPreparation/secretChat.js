function secretChat(input) {

    let concealedMessage = input.shift();

    let commandLine = input.shift();

    while (commandLine !== 'Reveal') {

        let splitedCommandLine = commandLine.split(':|:');

        let command = splitedCommandLine.shift();

        switch (command) {
            case 'InsertSpace':
                let index = Number(splitedCommandLine[0]);
                concealedMessage = concealedMessage.slice(0, index) + ' ' + concealedMessage.slice(index);
                console.log(concealedMessage);
                break;
            case 'Reverse':
                let substring = splitedCommandLine[0];

                if (concealedMessage.includes(substring)) {
                    concealedMessage = concealedMessage.replace(substring, '');
                    let splitedReversSubstring = substring.split('').reverse().join('');
                    concealedMessage = concealedMessage + splitedReversSubstring;
                    console.log(concealedMessage);
                } else {
                    console.log('error');
                }
                break;

            case 'ChangeAll':
                let partOfText = splitedCommandLine[0];
                let replacementText = splitedCommandLine[1];

                while (concealedMessage.includes(partOfText)) {

                    concealedMessage = concealedMessage.replace(partOfText, replacementText);    
                }
                console.log(concealedMessage);
        }
        commandLine = input.shift();
    }
    console.log(`You have a new text message: ${concealedMessage}`);
}

// secretChat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ]);
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);