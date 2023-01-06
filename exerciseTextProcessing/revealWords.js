function revealWords(words, text) {

    let wordsArray = words.split(', ');
    let textArray = text.split(' ');

    wordsArray.forEach(el => {
        let currentWord = el;

        for (let i = 0; i < textArray.length; i++) {
            let currentElement = textArray[i];

            if (currentElement.startsWith('*') && currentWord.length === currentElement.length) {
                text = text.replace(currentElement, currentWord);
            }    
        }    
    });
    console.log(text); 
}

// revealWords('great',
// 'softuni is ***** place for learning new programming languages');

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');