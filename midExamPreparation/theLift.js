function theLift(input) {

    let numberOfPeople = Number(input.shift());
    let updatedWagons = [];
    let counter = 0;

    let wagons = input[0].split(' ');

    for (let wagon = 0; wagon < wagons.length; wagon++) {
        let currentWagonNum = Number(wagons[wagon]);
        let freeSpiceWagon = 4 - currentWagonNum;

        if (numberOfPeople > 0 && numberOfPeople <= freeSpiceWagon) {
            currentWagonNum += numberOfPeople;
            numberOfPeople = 0;
            updatedWagons.push(currentWagonNum);
        } else if (numberOfPeople > 0 && freeSpiceWagon < numberOfPeople) {
            numberOfPeople -= freeSpiceWagon;
            currentWagonNum += freeSpiceWagon;
            updatedWagons.push(currentWagonNum);
        } else if (numberOfPeople === 0) {
            updatedWagons.push(currentWagonNum);
        }
    }

    for (const newWagon of updatedWagons) {
        if (newWagon === 4) {
            counter++;
        }
    }
    let lengthupdatedWagons = updatedWagons.length;

    if (counter === lengthupdatedWagons || numberOfPeople === 0) {

        if (counter < lengthupdatedWagons && numberOfPeople === 0) {
            console.log('The lift has empty spots!')
            console.log(`${updatedWagons.join(' ')}`);
        } else if (counter === lengthupdatedWagons && numberOfPeople > 0) {
            console.log(`There isn't enough space! ${numberOfPeople} people in a queue!`);
            console.log(`${updatedWagons.join(' ')}`);
        } else if (counter === lengthupdatedWagons && numberOfPeople === 0) {
            console.log(`${updatedWagons.join(' ')}`);
        }
    }
}

theLift([
    "15",
    "0 0 0 0 0"
]);
// theLift([
//     "20",
//     "0 2 0"
// ]);
