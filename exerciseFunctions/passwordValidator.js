function passwordValidator(password) {

    let countDigit = 0;
    let countLetters = 0;
    let lengthOfArray = password.length;

    for (let i = 0; i < lengthOfArray; i++) {
        let currentChar = password[i];

        let currentCharToCharCode = currentChar.charCodeAt();

        if (currentCharToCharCode >= 65 && currentCharToCharCode <= 90 || currentCharToCharCode >= 97 && currentCharToCharCode <= 122) {
            countLetters++;

        } else if (currentCharToCharCode >= 48 && currentCharToCharCode <= 57) {
            countDigit++;
        }
    }

    if (lengthOfArray < 6 || lengthOfArray > 10) {
        console.log('Password must be between 6 and 10 characters');

        if (countLetters === 0) {
            console.log('Password must consist only of letters and digits');
        }

        if (countDigit === 0) {
            console.log('Password must have at least 2 digits');

        } else if (countDigit === 1) {
            console.log('Password must have at least 2 digits');


        }

        if (lengthOfArray >= 6 && lengthOfArray <= 10) {

            if (countLetters === 0) {
                console.log('Password must consist only of letters and digits');
            }

            if (countDigit === 0) {
                console.log('Password must consist only of letters and digits');
                console.log('Password must have at least 2 digits');
            }
            if (countDigit < 2 && countDigit != 0) {
                console.log('Password must have at least 2 digits');
            }

            if (countDigit >= 2 && countLetters > 0) {
                console.log('Password is valid');
            }

        }
    }
}
passwordValidator('log12');
//passwordValidator('MyPass123');
//passwordValidator('Pa$s$s');