function theLimitationGame(input) {

    let message = input.shift();

    let currentLine = input.shift();

    while (currentLine !== 'Decode') {

        let splitedCurrentLine = currentLine.split('|');

        let command = splitedCurrentLine[0];

        switch (command) {
            case 'Move':
                let numberOfLetters = Number(splitedCurrentLine[1]);

                let substring = message.substring(0, numberOfLetters);
                message = message.replace(substring, '');
                message = message + substring;
                break;

            case 'Insert':
                let indexNum = Number(splitedCurrentLine[1]);
                let value = splitedCurrentLine[2];

                message = message.slice(0, indexNum) + value + message.slice(indexNum);
                break;

            case 'ChangeAll':
                let substringFromMessage = splitedCurrentLine[1];
                let replacement = splitedCurrentLine[2];

                while (message.includes(substringFromMessage)) {
                    message = message.replace(substringFromMessage, replacement);
                }
                break;
        }
        currentLine = input.shift();
    }
    console.log(`The decrypted message is: ${message}`);
}

theLimitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
theLimitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]);