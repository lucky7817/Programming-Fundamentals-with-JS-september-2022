function wordOccurrences(array) {

    let repeatedWords = {};
    
    for (const word of array) {

        if (repeatedWords[word]) {
            repeatedWords[word] += 1;
        } else {
            repeatedWords[word] = 1;
        }
    }

    let repeatedWordsArr = Object.entries(repeatedWords);

    repeatedWordsArr.sort((a, b) => b[1] - a[1])

    let repeatedWordsArrToObj = Object.fromEntries(repeatedWordsArr);

    for (const key in repeatedWordsArrToObj) {
        console.log(`${key} -> ${repeatedWordsArrToObj[key]} times`)
    }  
}

wordOccurrences(["Here", "is", "the", "first", "sentence",

    "Here", "is", "another", "sentence", "And",

    "finally", "the", "third", "sentence"]);