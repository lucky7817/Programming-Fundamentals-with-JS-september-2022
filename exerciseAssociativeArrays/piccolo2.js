function piccolo2(input) {

    let parkingList = new Map();
    let carLine = input.map(el => el.split(', '));

    carLine.forEach(element => {
        let command = element[0];
        let carNumber = element[1];

        if (command === 'IN') {
            parkingList.set(carNumber, command);
        } else if(command === 'OUT') {
            parkingList.delete(carNumber);
        }
        
    });

    let sortedCarNums = Array.from(parkingList).sort((a, b) => a[0].localeCompare(b[0]));

    if (sortedCarNums.length === 0) {
        console.log("Parking Lot is Empty");
    }
    sortedCarNums.forEach((carNum) => console.log(carNum[0]));
        
}

piccolo2([
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