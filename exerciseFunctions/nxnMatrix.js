function nxnMatrix(num) {

    let count = 0;
    let matrix = [];

    function row(row) {
        let numToString = num.toString();
        let repeatRow = numToString.repeat(row);

        return repeatRow;
    }
    let rows = row(num);

    while (count != num) {
        count++;
        matrix = [];

        for (let i = 0; i < num; i++) {
            let currentString = rows[i];
            matrix.push(currentString);
        }

        if (count % 2 === 0) {
            console.log(`${matrix.join(' ')}`);
        } else {
            console.log(`${matrix.join(' ')}`);
        }
    }
}

nxnMatrix(3);