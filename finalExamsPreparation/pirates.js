function pirates(input) {

    let currentLine = input.shift();
    let targets = {};

    while (currentLine !== 'Sail') {

        let splitedCurrentLine = currentLine.split('||');

        let city = splitedCurrentLine[0];
        let population = Number(splitedCurrentLine[1]);
        let gold = Number(splitedCurrentLine[2]);

        if (!targets.hasOwnProperty(city)) {
            targets[city] = {
                population: population,
                gold: gold,
            };
           
        } else {
            targets[city].population += population;
            targets[city].gold += gold;
        }
        currentLine = input.shift();
    }
    let currentCommand = input.shift();

    while (currentCommand !== 'End') {

        let splitedCurrentCommand = currentCommand.split('=>');

        let command = splitedCurrentCommand[0];
        let cityName = splitedCurrentCommand[1];

        switch (command) {
            case 'Plunder':
                let peopleToBeKiling = Number(splitedCurrentCommand[2]);
                let amountGoldToBeSteal = Number(splitedCurrentCommand[3]);

                targets[cityName].population -= peopleToBeKiling;
                targets[cityName].gold -= amountGoldToBeSteal;
                console.log(`${cityName} plundered! ${amountGoldToBeSteal} gold stolen, ${peopleToBeKiling} citizens killed.`);

                if (targets[cityName].population === 0 || targets[cityName].gold === 0) {
                    delete targets[cityName];
                    console.log(`${cityName} has been wiped off the map!`);
                }
                break;

            case 'Prosper':
                let increasingGold = Number(splitedCurrentCommand[2]);

                if (increasingGold < 0) {
                    console.log('Gold added cannot be a negative number!');
                    currentCommand = input.shift();
                    continue;
                } else {
                    targets[cityName].gold += increasingGold;
                    console.log(`${increasingGold} gold added to the city treasury. ${cityName} now has ${targets[cityName].gold} gold.`);
                }
                break;
        }
        currentCommand = input.shift();
    }
    let countLeftTargets = Object.keys(targets).length;

    if (countLeftTargets > 0) {
        console.log(`Ahoy, Captain! There are ${countLeftTargets} wealthy settlements to go to:`);

        for (const key in targets) {
            console.log(`${key} -> Population: ${targets[key].population} citizens, Gold: ${targets[key].gold} kg`);
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}

// pirates(["Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"]);
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);

