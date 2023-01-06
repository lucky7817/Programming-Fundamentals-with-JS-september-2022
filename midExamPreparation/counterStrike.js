function counterStrike(array) {

    let initialEnergy = Number(array.shift());
    let counterWonBattles = 0;

    let currentEnemyDistance = array.shift();

    while (currentEnemyDistance != 'End of battle') {

        currentEnemyDistance = Number(currentEnemyDistance);

        if (initialEnergy >= currentEnemyDistance) {
            initialEnergy -= currentEnemyDistance;
            counterWonBattles++;

            if (counterWonBattles % 3 === 0) {
                initialEnergy += counterWonBattles;
            }

        } else if (initialEnergy < currentEnemyDistance || !array.shift()) {
            console.log(`Not enough energy! Game ends with ${counterWonBattles} won battles and ${initialEnergy} energy`);
            return; 
        }
        currentEnemyDistance = array.shift();
    }
    console.log(`Won battles: ${counterWonBattles}. Energy left: ${initialEnergy}`);
}

// counterStrike(["100",
//     "10",
//     "10",
//     "10",
//     "1",
//     "2",
//     "3",
//     "73",
//     "10"]); 
counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"]);
