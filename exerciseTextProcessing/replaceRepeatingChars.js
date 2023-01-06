function replaceRepeatingChars(input) {

    let replaceRepeatingCharsArrey = input.split('');
    let result = '';

    for (let i = 0; i < replaceRepeatingCharsArrey.length; i++) {
        let currentLetter = replaceRepeatingCharsArrey[i];
        let nextCurrentLetter = replaceRepeatingCharsArrey[i + 1];

        if (nextCurrentLetter !== currentLetter) {
            result += currentLetter + '';
            
        } else {
            continue;
        }   
    }
    console.log(result); 
}

//replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');