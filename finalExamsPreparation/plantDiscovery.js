function plantDiscovery(input) {

    let totalPlants = Number(input.shift());
    let plants = {};
    let sumRating = 0;

    for (let i = 0; i < totalPlants; i++) {
        let plant = input.shift();
        let [plantName, rarity] = plant.split('<->');

        plants[plantName] = {
            rarity: Number(rarity),
            rating: [],
            averageRating: 0,
        };
    }
    console.log(plants);

    let commandLine = input.shift();

    while (commandLine !== 'Exhibition') {

        let splitedCommandLine = commandLine.split(/: | - /g);
        let command = splitedCommandLine[0];
        let plantName = splitedCommandLine[1];
        let args = Number(splitedCommandLine[2]);

        if (!plants.hasOwnProperty(plantName)) {
            console.log('error');
            commandLine = input.shift(); continue;
        }

        switch (command) {
            case 'Rate':
                plants[plantName].rating.push(args);
                break;

            case 'Update':
                plants[plantName].rarity = args;
                break;

            case 'Reset':
                plants[plantName].rating = [];
                plants[plantName].rating.push(0);
                plants[plantName].averageRating = 0;
                break;
        }
        commandLine = input.shift();
    }

    console.log('Plants for the exhibition:');

    for (const key in plants) {

        let lengthRatingArr = plants[key].rating.length
        sumRating = 0;

        for (let rating = 0; rating < lengthRatingArr; rating++) {
            sumRating += plants[key].rating[rating];
            plants[key].averageRating = sumRating / lengthRatingArr;
        }
        console.log(`- ${key}; Rarity: ${plants[key].rarity}; Rating: ${(plants[key].averageRating).toFixed(2)}`);
    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Arnoldii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Rate: Woo - 5",
    "Exhibition"]);
// plantDiscovery(["2",
//     "Candelabra<->10",
//     "Oahu<->10",
//     "Rate: Temenuga - 7",
//     "Rate: Oahu - 7",
//     "Rate: Candelabra - 6",
//     "Exhibition"]);

