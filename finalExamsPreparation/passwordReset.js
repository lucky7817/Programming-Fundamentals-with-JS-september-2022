function passwordReset(input) {

    let copyInput = input.slice();
    let password = copyInput.shift();
    let supportingRawPass = '';

    let currentLine = copyInput.shift();

    while (currentLine !== 'Done') {

        let splitedCurrentLine = currentLine.split(' ');
        let command = splitedCurrentLine[0];

        switch (command) {
            case 'TakeOdd':
                for (let i = 0; i < password.length; i++) {

                    if (i % 2 !== 0) {
                        let currentChar = password[i];
                        supportingRawPass += currentChar;
                    }
                }
                console.log(supportingRawPass);
                password = supportingRawPass;
                break;

            case 'Cut':
                let index = Number(splitedCurrentLine[1]);
                let length = Number(splitedCurrentLine[2]);

                let substring = supportingRawPass.substring(index, index + length);

                if (supportingRawPass.includes(substring)) {
                    supportingRawPass = supportingRawPass.replace(substring, '');
                    console.log(supportingRawPass);
                } else {
                    console.log(supportingRawPass);
                }
                password = supportingRawPass;
                break;

            case 'Substitute':
                let substringOccur = splitedCurrentLine[1];
                let substitute = splitedCurrentLine[2];

                if (supportingRawPass.includes(substringOccur)) {

                    while (supportingRawPass.includes(substringOccur)) {
                        supportingRawPass = supportingRawPass.replace(substringOccur, substitute);
                    }
                    console.log(supportingRawPass);

                } else {
                    console.log('Nothing to replace!');
                }
                password = supportingRawPass;
                break;
        }
        currentLine = copyInput.shift();
    }
    console.log(`Your password is: ${password}`);
}

// passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
//     "TakeOdd",
//     "Cut 15 3",
//     "Substitute :: -",
//     "Substitute | ^",
//     "Done"]);
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]);
