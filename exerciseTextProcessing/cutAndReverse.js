function cutAndReverse(input) {

    let cutAndReverseArray = input.split('');
    let resultFirst = [];
    let resultLast = [];

    for (let i = 0; i < cutAndReverseArray.length / 2; i++) {
        resultFirst.push(cutAndReverseArray[i]);    
    }

    for (let j = cutAndReverseArray.length / 2; j < cutAndReverseArray.length; j++) {
        resultLast.push(cutAndReverseArray[j]);  
    }

    console.log(resultFirst.reverse().join(''));
    console.log(resultLast.reverse().join(''));
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
