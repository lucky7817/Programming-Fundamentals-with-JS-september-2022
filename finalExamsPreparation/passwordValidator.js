function passwordValidator(input) {

    let pass = input.shift();
    let pattern = /([A-Za-z0-9]+[_]*){8}/g;



    let password = pass.match(pattern);

    let splitedPassword = password.map(el => el.split(''));

    let currentLine = input.shift();

    while (currentLine !== 'Complete') {

        let splitedCurrentLine = currentLine.split(' '); 
        let commandOfTwo = splitedCurrentLine[0] + ' ' + splitedCurrentLine[1];
        
        let command = splitedCurrentLine[0];

        if (commandOfTwo === 'string') { 

            switch (commandOfTwo) {
                case 'Make Upper':
                    let index = Number(splitedCurrentLine[2]);
                    let indexChar = (pass.charAt(index)).toUpperCase();
                    pass = pass.replace(pass.charAt(index), indexChar);
                    console.log(pass);
                    break;
    
                case 'Make Lower':
                    let indexToLower = Number(splitedCurrentLine[2]);
                    let indexCharToLower = (pass.charAt(indexToLower)).toLowerCase();
                    pass = pass.replace(pass.charAt(indexToLower), indexCharToLower);
                    console.log(pass);
                    break;
            }
            currentLine = input.shift();
        } else {
            switch (command) {
            case 'Insert':
                let indexToPut = Number(splitedCurrentLine[1]);
                let char = splitedCurrentLine[2];

                if (pass.charAt(indexToPut)) {
                    pass = pass.slice(0, indexToPut) + char + pass.slice(indexToPut);
                    console.log(pass);
                } else {
                    currentLine = input.shift();
                    continue;
                }
                break;

            case 'Replace':
                let charGiven = splitedCurrentLine[1];
                let value = Number(splitedCurrentLine[2]);
                let asciiCharGiven = charGiven.charCodeAt()
                let sum = value + asciiCharGiven;
                let newChar = String.fromCharCode(sum);

                while (pass.includes(charGiven)) {
                    pass = pass.replace(charGiven, newChar);
                }
                console.log(pass)
                break;

            case 'Validation':
                let lengthPass = pass.length;

                let patternOther = /[A-Za-z0-9]+[_]*/g;
                let patternC = /[A-Z]+/g;
                let patternD = /[a-z]+/g;
                let patternE = /[0-9]+/g;

                let passwordOther = pass.match(patternOther);
                let passwordC = pass.match(patternC);
                let passwordD = pass.match(patternD);
                let passwordE = pass.match(patternE);

                if (lengthPass < 8) {
                    console.log('Password must be at least 8 characters long!');
                }

                if (passwordOther === null) {
                    console.log('Password must consist only of letters, digits and _!');
                }

                if (passwordC === null) {
                    console.log('Password must consist at least one uppercase letter!');
                }

                if (passwordD === null) {
                    console.log('Password must consist at least one lowercase letter!');
                }

                if (passwordE === null) {
                    console.log('Password must consist at least one digit!');
                }
                break;
            }
            currentLine = input.shift();
        }
        
    }
}

// passwordValidator(['invalidpassword*',
//     'Add 2 p',
//     'Replace i -50',
//     'Replace * 10',
//     'Make Upper 2',
//     'Validation',
//     'Complete']);
passwordValidator(['123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Lower 3',
    'Complete']);
