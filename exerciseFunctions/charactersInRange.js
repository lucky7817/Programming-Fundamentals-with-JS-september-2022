function charactersInRange(firstChar, secondChar) {

    let start = firstChar.charCodeAt();
    let end = secondChar.charCodeAt();
    let oneLineResult = '';

    if (end < start) {
        start = secondChar.charCodeAt();
        end = firstChar.charCodeAt();   
    }

    for (let i = start + 1; i < end; i++) {
        oneLineResult += String.fromCharCode(i) + ' ';
        
    }
    console.log(oneLineResult);
}

//charactersInRange('a','d');
charactersInRange('#', ':');