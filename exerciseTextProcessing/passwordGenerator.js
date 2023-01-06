function passwordGenerator(input) {

    let passwordProcessing = (input.shift() + input.shift()).split('');
    let word = input[0].split('');
    let counter = 0;

    for (let i = 0; i < passwordProcessing.length; i++) {
        let currentLetter = passwordProcessing[i];

        if (currentLetter === 'a' || currentLetter === 'e' || currentLetter === 'i' || currentLetter === 'o'
            || currentLetter === 'u') {

            for (let j = 0 + counter; j < word.length; j++) {
                counter++;
                passwordProcessing.splice(i, 1, word[j].toUpperCase());
                if (counter === word.length) {
                    j = 0;
                    counter = 0;
                }
                break;
            }
        }
    }
    let password = passwordProcessing.reverse().join('');
    console.log(`Your generated password is ${password}`);
}

passwordGenerator([
    'ilovepizza',
    'ihatevegetables',
    'orange'
]);