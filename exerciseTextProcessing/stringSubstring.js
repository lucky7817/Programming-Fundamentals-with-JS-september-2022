function stringSubstring(word, text) {

    let textToLowerCaseArray = text.toLowerCase().split(' ');
    let index = 0;
    let command = textToLowerCaseArray[index];
    index++;

    while (command !== word) {

        if (index === textToLowerCaseArray.length) {
            break;
        }
        command = textToLowerCaseArray[index];
        index++;
    }
    if (command === word) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

stringSubstring('javascript',
    'JavaScript is the best programming language');

stringSubstring('python',
    'JavaScript is the best programming language');
