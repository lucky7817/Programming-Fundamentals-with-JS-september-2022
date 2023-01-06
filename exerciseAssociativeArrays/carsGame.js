function cardGame(input) {



    let splitedArr = input.map(el => el.split(', '));
    let compareArr = [];
    let personCards = {};

    let splitedIndexZero = '';
    let name = '';
    //personCards[name] = 0;
    let S = 4;
    let H = 3;
    let D = 2;
    let C = 1;

    let result = 0;
    let splitedCurrentCard = [];



    for (let i = 0; i < splitedArr[i].length; i++) {

        let currentArr = splitedArr[i];


        if (i === 0) {
            splitedIndexZero = currentArr.map(el => el.split(': '));
            name = splitedIndexZero[0].shift();
        }

        for (let j = 0; j < splitedIndexZero.length; j++) {
            let currentStr = splitedIndexZero[j][0];

            if (compareArr.includes(currentStr)) {
                continue;
            }

            compareArr.push(currentStr);

        }

        for (let h = 0; h < compareArr.length; h++) {
            let currentCard = compareArr[h];

            splitedCurrentCard = currentCard.split('');

            let power = splitedCurrentCard[0];
            let type = splitedCurrentCard[1];

            if (power === 'J' || power === 'Q' || power === 'K' || power === 'A') {

                switch (power) {
                    case 'J': power = 11; break;
                    case 'Q': power = 12; break;
                    case 'K': power = 13; break;
                    case 'A': power = 14; break;
                }

                switch (type) {
                    case 'S': result += (power * S); break;
                    case 'H': result += (power * H); break;
                    case 'D': result += (power * D); break;
                    case 'C': result += (power * C); break;
                }
                personCards[name] = result;

            } else if (power = '2' || power === '3' || power === '4' || power === '5' || power === '6' || power === '7' || power === '8'
                || power === '9') {

                splitedCurrentCard = currentCard.split('');
                power = splitedCurrentCard[0];

                //power = currentCard;

                switch (type) {

                    case 'S': result += (Number(power) * S); break;
                    case 'H': result += (Number(power) * H); break;
                    case 'D': result += (Number(power) * D); break;
                    case 'C': result += (Number(power) * C); break;
                }

                personCards[name] = result;


            }

        }

    }

}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);