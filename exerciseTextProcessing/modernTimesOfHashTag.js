function modernTimesOfHashTag(text) {

    let textArray = text.split(' ')

    textArray.forEach(el => {
        let currentWord = el;

        if (currentWord.startsWith('#') && currentWord.length > 1) {
            let newWord = currentWord.substring(1);
            let isWordOnlyLetters = /^[a-zA-Z]+$/.test(newWord);

            if (isWordOnlyLetters) {
                console.log(newWord);
            }    
        }       
    });
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
//modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');