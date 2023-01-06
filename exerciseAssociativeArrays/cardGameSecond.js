function cardGameS(input) {

    let cardSume = {};
    let uniqueArray = [];
    let result = 0;
    let counter = 0;

    for (const line of input) {
        let [name, cards] = line.split(': ');

        let splitedCards = cards.split(', ');

        if (!cardSume.hasOwnProperty(name)) {
            cardSume[name] = [];
        }
        cardSume[name] += `${splitedCards},`;

    }
    let valuesCardSume = Object.entries(cardSume);
    let name = '';

    for (let g = 0; g < valuesCardSume.length; g++) {
        name = valuesCardSume[g].shift();

        result = 0;
        counter = 0;
        uniqueArray = [];

        let splitedValueCardSume = valuesCardSume[g].map(el => el.split(','));

        for (let j = 0; j < splitedValueCardSume[0].length; j++) {

            let currentCard = splitedValueCardSume[0][j];

            if (uniqueArray.includes(currentCard)) {
                counter++;
                continue;
            }
            uniqueArray.push(currentCard);

            for (let k = 0 + (j - counter); k < uniqueArray.length + counter; k = (k + counter) + 1) {

                let currentUnique = uniqueArray[k];

                for (let h = 0; h < currentUnique.length; h += 2) {

                    let power = '';
                    let type = '';

                    if (currentUnique.length === 2) {
                        power = currentUnique[h];
                        type = currentUnique[h + 1];

                        if ((power === 'J' || power === 'Q' || power === 'K' || power === 'A')) {

                            switch (power) {
                                case 'J': power = 11; break;
                                case 'Q': power = 12; break;
                                case 'K': power = 13; break;
                                case 'A': power = 14; break;
                            }
                        }

                        switch (type) {
                            case 'S': result += Number(power) * 4; break;
                            case 'H': result += Number(power) * 3; break;
                            case 'D': result += Number(power) * 2; break;
                            case 'C': result += Number(power) * 1; break;
                        }

                    } else if (currentUnique.length === 3) {
                        power = currentUnique[h] + currentUnique[h + 1];
                        type = currentUnique[h + 2];
                        h += 3;

                        switch (type) {
                            case 'S': result += Number(power) * 4; break;
                            case 'H': result += Number(power) * 3; break;
                            case 'D': result += Number(power) * 2; break;
                            case 'C': result += Number(power) * 1; break;
                        }
                    }
                    power = '';
                    type = '';
                    cardSume[name] = result;
                    
                    
                }
            }
        }
    }
    for (const name in cardSume) {
        console.log(`${name}: ${cardSume[name]}`);
     }
}

cardGameS([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);