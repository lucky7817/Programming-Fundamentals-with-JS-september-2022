function commonElements(firstArray, secondArray) {

    let currentNumFirstArray = 0;

    for (let i = 0; i < firstArray.length; i++) {
        currentNumFirstArray = firstArray[i];

        for ( let j = 0; j < secondArray.length; j++) {
            let currentNumSecArray =  secondArray[j];

            if (currentNumFirstArray === currentNumSecArray) {
                console.log(currentNumFirstArray);
            }
    
        }

    }
 

}

//commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);