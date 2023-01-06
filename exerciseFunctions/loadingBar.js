function loadingBar(num) {

    let arrayOfStartsimbols = [];;
    let countProgress = 0;

    for (let i = 10; i <= num; i += 10) {
        let simbolLoaded = '%';
        arrayOfStartsimbols.push(simbolLoaded);
        countProgress += 10;
    }

    for (let j = num + 10; j <= 100; j += 10) {
        let simbolLoading = '.';
        arrayOfStartsimbols.push(simbolLoading);

    }
    if (countProgress < 100) {
        console.log(`${countProgress}% [${arrayOfStartsimbols.join('')}]\nStill loading...`);
    } else {
        console.log('100% Complete!');
    }
}

loadingBar(100);