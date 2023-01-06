function needForSpeed(input) {

    let copyInput = input.slice();

    let numberOfCars = Number(copyInput.shift());
    let carsInfo = {}

    for (let i = 0; i < numberOfCars; i++) {

        let [carBrand, mileage, fuel] = copyInput.shift().split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);

        carsInfo[carBrand] = {
            mileage: mileage,
            fuel: fuel,
        };
    }

    let currentLine = copyInput.shift();

    while (currentLine !== 'Stop') {

        let splitedCurrentLine = currentLine.split(' : ');

        let command = splitedCurrentLine[0];
        let car = splitedCurrentLine[1];

        switch (command) {
            case 'Drive':
                let distanceKm = Number(splitedCurrentLine[2])
                let neededFuel = Number(splitedCurrentLine[3]);

                if (carsInfo[car].fuel < neededFuel) {
                    console.log('Not enough fuel to make that ride');
                } else if (carsInfo[car].fuel >= neededFuel) {
                    carsInfo[car].mileage += distanceKm;
                    carsInfo[car].fuel -= neededFuel;
                    console.log(`${car} driven for ${distanceKm} kilometers. ${neededFuel} liters of fuel consumed.`);
                }

                if (carsInfo[car].mileage >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete carsInfo[car];
                }
                break;

            case 'Refuel':
                let refillTankLiters = Number(splitedCurrentLine[2]);

                let totalFuelAfterRefill = carsInfo[car].fuel + refillTankLiters;

                if (totalFuelAfterRefill > 75) {
                    let realFuelForRefill = 75 - carsInfo[car].fuel;
                    carsInfo[car].fuel += realFuelForRefill;
                    console.log(`${car} refueled with ${realFuelForRefill} liters`);
                } else {
                    carsInfo[car].fuel += refillTankLiters;
                    console.log(`${car} refueled with ${refillTankLiters} liters`);
                }
                break;

            case 'Revert':
                let kilometers = splitedCurrentLine[2];

                carsInfo[car].mileage -= kilometers;
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);

                if (carsInfo[car].mileage < 10000) {
                    carsInfo[car].mileage = 10000;
                }
                break;
        }

        currentLine = copyInput.shift();

    }

    for (const key in carsInfo) {

        console.log(`${key} -> Mileage: ${carsInfo[key].mileage} kms, Fuel in the tank: ${carsInfo[key].fuel} lt.`);
    }
}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);
// needForSpeed([
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Bugatti Veyron|12345|67',
//     'Koenigsegg CCXR|67890|12',
//     'Aston Martin Valkryie|99900|50',
//     'Drive : Koenigsegg CCXR : 382 : 82',
//     'Drive : Aston Martin Valkryie : 99 : 23',
//     'Drive : Aston Martin Valkryie : 2 : 1',
//     'Refuel : Lamborghini Veneno : 40',
//     'Revert : Bugatti Veyron : 2000',
//     'Stop'
// ]);