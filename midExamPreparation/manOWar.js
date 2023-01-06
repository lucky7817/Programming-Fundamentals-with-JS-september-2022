function manOWar(array) {

    let pirateShip = array.shift().split('>').map(x => Number(x));
    let warShip = array.shift().split('>').map(x => Number(x));
    let healthOfShipSection = Number(array.shift());

    let currentLine = array.shift();
    let minStatusOfSection = 0;
    let counterMinStatusSection = 0;
    let sumPirateshipSections = 0;
    let sumWarshipSections = 0;

    while (currentLine !== 'Retire') {

        let currentCommand = currentLine.split(' ');
        let command = '';
        let index = 0;
        let damageOrHealth = 0;
        let indexStart = 0;
        let indexEnd = 0;
        let damage = 0;

        if (currentCommand.length === 3) {
            command = currentCommand[0];
            index = Number(currentCommand[1]);
            damageOrHealth = Number(currentCommand[2]);
        } else if (currentCommand.length === 4) {
            command = currentCommand[0];
            indexStart = Number(currentCommand[1]);
            indexEnd = Number(currentCommand[2]);
            damage = Number(currentCommand[3]);
        } else if (currentCommand.length === 1) {
            command = currentCommand[0];
        }

        switch (command) {
            case 'Fire':
                if (warShip[index]) {
                    warShip[index] -= damageOrHealth;

                    if (warShip[index] <= 0) {
                        console.log('You won! The enemy ship has sunken.');
                        return;
                    }

                }
                break;

            case 'Defend':
                if (pirateShip[indexStart] && pirateShip[indexEnd]) {
                    for (let i = indexStart; i <= indexEnd; i++) {
                        pirateShip[i] -= damage;

                        if (pirateShip[i] <= 0) {
                            console.log('You lost! The pirate ship has sunken.');
                            return;
                        }
                    }
                }
                break;

            case 'Repair':

                if (pirateShip[index]) {
                    pirateShip[index] += damageOrHealth;
                }

                if (pirateShip[index] > healthOfShipSection) {
                    pirateShip[index] = healthOfShipSection;
                }
                break;

            case 'Status':
                minStatusOfSection = healthOfShipSection * 0.2;
                for (let j = 0; j < pirateShip.length; j++) {
                    let currentSection = pirateShip[j];
                    if (currentSection < minStatusOfSection) {
                        counterMinStatusSection++;
                    }
                }
                console.log(`${counterMinStatusSection} sections need repair.`);

                break;
        }
        currentLine = array.shift();
    }

    for (let p = 0; p < pirateShip.length; p++) {
        sumPirateshipSections += pirateShip[p];
    }
    console.log(`Pirate ship status: ${sumPirateshipSections}`);

    for (let w = 0; w < warShip.length; w++) {
        sumWarshipSections += warShip[w];
    }
    console.log(`Warship status: ${sumWarshipSections}`);
}

manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);

manOWar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"]);

