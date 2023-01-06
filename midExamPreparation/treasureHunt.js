function treasureHunt(arr) {

    let initialLoot = arr.shift().split('|');
    let currentLine = arr.shift()
    let buff = '';
    let stealedItems = [];
    let sum = 0;

    while (currentLine != "Yohoho!") {
        let lineContent = currentLine.split(' ');
        let command = lineContent[0];
        let firstNum = 0;

        if (lineContent.length === 2 && Number(lineContent[1])) {
            firstNum = Number(lineContent[1]);
        }

        switch (command) {

            case 'Loot':
                for (let i = 1; i < lineContent.length; i++) {
                    let currentItem = lineContent[i];

                    if (!initialLoot.includes(currentItem)) {
                        initialLoot.unshift(currentItem);
                    }
                }
                break;

            case 'Drop':

                if (firstNum >= 0 && firstNum < initialLoot.length) {
                    let firstArgToStringPosition = initialLoot[firstNum]
                    buff = firstArgToStringPosition;
                    initialLoot.splice(firstNum, 1);
                    initialLoot.push(buff);
                }
                break;

            case 'Steal':

                for (let j = initialLoot.length - firstNum; j < initialLoot.length; j++) {
                    let currentStealItems = initialLoot[j];
                    stealedItems.push(currentStealItems);

                }
                let lengthBeforeDelete = initialLoot.length;

                for (let h = initialLoot.length - 1; h >= lengthBeforeDelete - firstNum; h--) {
                    initialLoot.splice(h, 1);
                }
                console.log(stealedItems.join(', '));
                break;
        }

        currentLine = arr.shift();
    }

    if (initialLoot.length === 0) {
        console.log('Failed treasure hunt.');
        return;
    } else {

        for (let h = 0; h < initialLoot.length; h++) {
            let currentElement = initialLoot[h];
            sum += currentElement.length;
        }

    }
    let totalSum = (sum / initialLoot.length).toFixed(2);
    console.log(`Average treasure gain: ${totalSum} pirate credits.`);
}

// treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
//     "Loot Wood Gold Coins",
//     "Loot Silver Pistol",
//     "Drop 3",
//     "Steal 3",
//     "Yohoho!"]);
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]);


