function nonDecreasingSubset(array) {

    let newArray = [];
    let nextIterationFirstLoop = 0;

    for (let i = 0; i < array.length - 1; i = nextIterationFirstLoop) {
        let currentNum = Number(array[i]);
        if (i === 0) {  
            newArray.push(Number(array[i]));
        }

        for (let j = i + 1; j < array.length; j++) {
            let currentSecNum = array[j];
            nextIterationFirstLoop = j;

            if (currentSecNum >= currentNum) {
                newArray.push(currentSecNum); break;
            } else {
                continue;
            }
        }
    }
    console.log(newArray.join(' '));
}

//nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
//nonDecreasingSubset([ 1, 2, 3, 4]);
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);