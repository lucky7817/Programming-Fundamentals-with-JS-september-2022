function againPlantDiscovery(input) {

    let numberOfPlants = Number(input.shift());
    let plants = {};
    let totalRating = 0;
    let averageRating = 0;
    let lengthInputCount = 0;

    for (let i = 0; i < numberOfPlants; i++) {
        let currentPlantLine = input[i];
        let currentPlantLineArr = currentPlantLine.split('<->');
        let plantName = currentPlantLineArr[0];
        let rarity = Number(currentPlantLineArr[1]);

        plants[plantName] = {
            rarity: rarity,
            rating: [],
            averageRating: averageRating,
        }
    }

    for (let j = numberOfPlants; j < input.length; j++) {

        let currentCommandLine = input[j];
        lengthInputCount++;
        averageRating = 0;
        totalRating = 0;

        if (currentCommandLine !== 'Exhibition') {

            let currentCommandLineArr = currentCommandLine.split(/: | - /g);
            let command = currentCommandLineArr[0];
            let plant = currentCommandLineArr[1]
            let digit = Number(currentCommandLineArr[2]);

            if (!plants.hasOwnProperty(plant)) {
                console.log('error');
                continue;
            }

            switch (command) {
                
                case 'Rate':
                    plants[plant].rating.push(digit);
                    break;

                case 'Update':
                    plants[plant].rarity = digit;
                    break;

                case 'Reset':
                    plants[plant].rating = [];
                    plants[plant].rating.push(0);
                    break;
            }

            let lengthOfRatingArr = plants[plant].rating.length

            if (command === 'Rate' || command === 'Reset') {

                for (const ratingDigit of plants[plant].rating) {
                    totalRating += ratingDigit;
                    averageRating = totalRating / lengthOfRatingArr;
                    plants[plant].averageRating = averageRating;
                }
            }

        } else {
            console.log('Plants for the exhibition:');

            for (const key in plants) {
                console.log(`- ${key}; Rarity: ${plants[key].rarity}; Rating: ${(plants[key].averageRating).toFixed(2)}`);
            }
        }

        let lengthInput = input.length - numberOfPlants

        if (lengthInput > lengthInputCount) {
            continue;
        } else {
            return;
        }
    }
}

// againPlantDiscovery(["3",
//     "Arnoldii<->4",
//     "Woodii<->7",
//     "Welwitschia<->2",
//     "Rate: Woodii - 10",
//     "Rate: Welwitschia - 7",
//     "Rate: Arnoldii - 3",
//     "Rate: Woodii - 5",
//     "Update: Woodii - 5",
//     "Reset: Arnoldii",
//     "Exhibition"]);
againPlantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"]);
