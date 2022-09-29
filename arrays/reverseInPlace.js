function reverseInPlace(stringsArray) {

    let buff = '';

    for (let i = stringsArray.length - 1; i > stringsArray.length / 2; i--) {
        buff += stringsArray[i] + ' ';

    }

    for (let j = Math.ceil((stringsArray.length -1) / 2); j >= 0; j--) {
        buff += stringsArray[j] + ' ';
    }
    console.log(buff);

}

//reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig','klm', 'nop']);