function shootForTheWin(array) {

    let targets = array.shift().split(' ').map(x => Number(x));
    let counterShotTargets = 0;

    let currentShoot = array.shift();

    while (currentShoot != 'End') {
        currentShoot = Number(currentShoot);

        if (targets[currentShoot]) {
            for (let i = currentShoot + 1; i < targets.length; i++) {
                let shootValue = targets[currentShoot];

                if (targets[i] > shootValue && targets[i] != -1) {
                    targets[i] -= shootValue;
                } else if (targets[i] <= shootValue && targets[i] != -1) {
                    targets[i] += shootValue;
                }
            }
        }

        if (targets[currentShoot]) {
            for (let i = currentShoot - 1; i >= 0; i--) {
                let shootValue = targets[currentShoot];

                if (targets[i] > shootValue && targets[i] != -1) {
                    targets[i] -= shootValue
                } else if (targets[i] <= shootValue && targets[i] != -1) {
                    targets[i] += shootValue;
                }
            }
        }
        if (!targets[currentShoot]) {
            currentShoot = array.shift();
        } else {
            targets[currentShoot] = -1;
            counterShotTargets++;
            currentShoot = array.shift();
        }
    }
    console.log(`Shot targets: ${counterShotTargets} -> ${targets.join(' ')}`);
}

// shootForTheWin(["24 50 36 70",
//     "0",
//     "4",
//     "3",
//     "1",
//     "End"]);
shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"]);

