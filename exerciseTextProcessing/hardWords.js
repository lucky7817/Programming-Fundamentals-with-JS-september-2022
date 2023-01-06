function hardWords(array) {

    let stringInArray = array[0].split('_');
    let counter = 1;
    let start = 0;

    for (let i = 0; i < stringInArray.length; i++) {
        let currentEl = stringInArray[i];
        
        if (currentEl === '') {
            start = (i - counter) + 1;
            counter++;
        } else if (currentEl !== '' && counter > 1) {

            for (let j = 0; j < array[1].length; j++) {
                let currentWord = array[1][j];
                
                if (currentWord.length === counter) {
                    stringInArray.splice(start, counter - 1, currentWord);
                    i = counter - 2
                    start = 0;
                    counter = 1;
                    break;
                }
            }
        }
    }
    console.log(stringInArray.join(''));
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);