function heroesOfCodeAndLogic(input) {

    let heroesNumber = Number(input.shift());
    let heroes = {};

    for (let i = 0; i < heroesNumber; i++) {
        let currentLine = input[i];
        let splitedCurrentLine = currentLine.split(' ');

        let heroName = splitedCurrentLine[0];
        let hp = Number(splitedCurrentLine[1]);
        let mp = Number(splitedCurrentLine[2]);

        heroes[heroName] = {
            hp: hp,
            mp: mp,
        };
    }

    for (let j = heroesNumber; j < input.length; j++) {
        let currentCommandLine = input[j];

        if (currentCommandLine !== 'End') {

            let splitedCurrentCommandLine = currentCommandLine.split(' - ');

            let command = splitedCurrentCommandLine[0];
            let hero = splitedCurrentCommandLine[1];

            switch (command) {
                case 'CastSpell':
                    let mpNeeded = Number(splitedCurrentCommandLine[2]);
                    let spellName = splitedCurrentCommandLine[3];

                    if (heroes[hero].mp >= mpNeeded) {
                        heroes[hero].mp -= mpNeeded;
                        console.log(`${hero} has successfully cast ${spellName} and now has ${heroes[hero].mp} MP!`);
                    } else {
                        console.log(`${hero} does not have enough MP to cast ${spellName}!`);
                    }
                    break;

                case 'TakeDamage':
                    let damage = Number(splitedCurrentCommandLine[2]);
                    let attacker = splitedCurrentCommandLine[3];

                    if (heroes[hero].hp > 0) {
                        heroes[hero].hp -= damage;
                        if (heroes[hero].hp > 0) {
                            console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero].hp} HP left!`);
                        } else {
                            delete heroes[hero]
                            console.log(`${hero} has been killed by ${attacker}!`);
                        }
                    }
                    break;

                case 'Recharge':
                    let amountAddToMp = Number(splitedCurrentCommandLine[2]);
                    let countMp = heroes[hero].mp + amountAddToMp;

                    if (countMp > 200) {
                        let mpAmount = 200 - heroes[hero].mp;
                        heroes[hero].mp += mpAmount;
                        console.log(`${hero} recharged for ${mpAmount} MP!`);
                    } else {
                        heroes[hero].mp += amountAddToMp;
                        console.log(`${hero} recharged for ${amountAddToMp} MP!`);
                    }
                    break;

                case 'Heal':
                    let amountHp = Number(splitedCurrentCommandLine[2]);
                    let countHp = heroes[hero].hp + amountHp;

                    if (countHp > 100) {
                        let hpAmount = 100 - heroes[hero].hp;
                        heroes[hero].hp += hpAmount
                        console.log(`${hero} healed for ${hpAmount} HP!`);
                    } else {
                        heroes[hero].hp += amountHp
                        console.log(`${hero} healed for ${amountHp} HP!`);
                    }
                    break;
            }
        } else {

            if (Object.keys(heroes).length > 0) {

                for (const key in heroes) {
                    console.log(`${key}`);
                    console.log(`HP: ${heroes[key].hp}`);
                    console.log(`MP: ${heroes[key].mp}`);
                }
            }
        }
    }   
}

heroesOfCodeAndLogic(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);


