function heartDelivery(array) {

    let neighborhoodHouses = array.shift().split('@').map(x => Number(x));
    let currentCommands = array.shift();
    
    let counter = 0;
    let lastPosition = 0;
    let jumpLength = 0;
    let sumAllHousesHeard = 0;
    let counterHousesNotCelebrite = 0;

    while (currentCommands != 'Love!') {

        let isLengthNotEnough = true;

        let splitCurrentCommands = currentCommands.split(' ');

        jumpLength = Number(splitCurrentCommands[1]);

        for (let i = jumpLength + lastPosition; i < neighborhoodHouses.length; i++) {

            if (neighborhoodHouses[i] === 0) {
                console.log(`Place ${i} already had Valentine's day.`);

                isLengthNotEnough = false;

                lastPosition = i;

                break;
            }

            if (jumpLength + lastPosition < neighborhoodHouses.length && neighborhoodHouses[i] != 0) {
                neighborhoodHouses[i] -= 2;

                isLengthNotEnough = false;

                lastPosition = i;

                if (neighborhoodHouses[i] === 0) {
                    console.log(`Place ${i} has Valentine's day.`);
                }
                break;
            }
        }

        if (isLengthNotEnough) {
            if (neighborhoodHouses[0] != 0) {
                neighborhoodHouses[0] -= 2;
            }

            isLastPositionIsZero = true;

            lastPosition = 0;

            if (neighborhoodHouses[0] === 0 && counter > 0) {
                console.log(`Place ${0} already had Valentine's day.`);
            } else if (neighborhoodHouses[0] === 0) {
                counter++;
                console.log(`Place ${0} has Valentine's day.`);
            }
        }

        currentCommands = array.shift();

    }
    console.log(`Cupid's last position was ${lastPosition}.`);

    for (let j = 0; j < neighborhoodHouses.length; j++) {
        sumAllHousesHeard += neighborhoodHouses[j];
        if (neighborhoodHouses[j] != 0) {
            counterHousesNotCelebrite++;
        }
    }

    if (sumAllHousesHeard === 0) {
        console.log('Mission was successful.');

    } else {
        console.log(`Cupid has failed ${counterHousesNotCelebrite} places.`);
    }
}

// heartDelivery(["10@10@10@2",
//     "Jump 1",
//     "Jump 2",
//     "Love!"]);

heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"]);

