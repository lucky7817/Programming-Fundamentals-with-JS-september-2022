function smallestTwoNumbers(array) {

    let sortedArray = array.sort((a, b) => {
        return a - b;
    });
    
    let newArray = sortedArray.slice(0, 2);

    console.log(newArray.join(' '));

}

smallestTwoNumbers([30, 15, 50, 5]);