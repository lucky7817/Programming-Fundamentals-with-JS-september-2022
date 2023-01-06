function sorting(arr) {

    let sortedArray = arr.sort((a, b) => a - b);
    let newArray = [];
    
    for (let i = 0; i < sortedArray.length; i++) {
        let lastElement = sortedArray.pop();
        let firstArray = sortedArray.shift();

        newArray.push(lastElement);
        newArray.push(firstArray);

    }
    newArray.push(sortedArray.pop());
    newArray.push(sortedArray.shift());

    console.log(newArray.join(' '));

}

//sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);