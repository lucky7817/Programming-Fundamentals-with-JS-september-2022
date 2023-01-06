function piccolo(listCar) {

    let splitedCarLine = listCar.map(line => line.split(', '));
    let inCars = [];
    let outCars = [];

    for (const line of splitedCarLine) {

        if (line[0] === 'IN') {
            inCars.push(line[1]);
        } else if(line[0] === 'OUT'){
            outCars.push(line[1]);
        }
    }

    if (inCars.length === 0) {
        console.log("Parking Lot is Empty"); return;
    }

    for (const outCar of outCars) {

        for (const inCar of inCars) {

            if (inCars.find(el => el === outCar)) {
                let carIndex = inCars.indexOf(outCar);
                inCars.splice(carIndex, 1); break;
            } else {
                continue;
            }
        }
    }

    if (inCars.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        for (const carNumber of inCars) {
            inCars.sort((a, b) => a.localeCompare(b));
        }

        for (const carNum of inCars) {
            console.log(carNum);
        }
    }
}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);
