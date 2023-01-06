function bossRush(input) {

    let numberInputs = Number(input.shift());

    for (let i = 0; i < numberInputs; i++) {

        let currentLine = input[i];
        let splitedCurrentLine = currentLine.split(':');
        let bossName = splitedCurrentLine[0];
        let title = splitedCurrentLine[1]
        
        let patternBoss = /([\|]{1})([A-Z]{4,})\1/g;
        let patternTitle = /^([#]{1})(?<name>[A-Za-z]+) {1}(?<title>[A-Za-z]+){2}\1/g;
        
        let name = bossName.match(patternBoss);
        let titleWords = title.match(patternTitle);
        
        if (name !== null && titleWords !== null) {
            let splitedName = name.map(el => el.split('|'));
            let splitedTitleWords = titleWords.map(word => word.split('#'));

            let lengthBossName = splitedName[0][1].length;
            let lengthTitle = splitedTitleWords[0][1].length;

            console.log(`${splitedName[0][1]}, The ${splitedTitleWords[0][1]}`);
            console.log(`>> Strength: ${lengthBossName}`);
            console.log(`>> Armor: ${lengthTitle}`);

        } else {
            console.log('Access denied!');
        }        
    }
}

// bossRush(['3',
// '|PETER|:#Lead architect#',
// '|GEORGE|:#High Overseer#',
// '|ALEX|:#Assistant Game Developer#']);
bossRush(['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#']);

