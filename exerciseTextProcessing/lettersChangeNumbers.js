function lettersChangeNumbers(input) {

    let inputArray = input.split(' ');
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < inputArray.length; i++) {
        let currentString = inputArray[i].split('');

        let firstLetter = currentString.shift();
        let lastLetter = currentString.pop();
        

        let alphabetArray = alphabet.split('');

        for (let j = 0; j < alphabetArray.length; j++) {
            let currentLetter = alphabetArray[j];
            let positionLetter = 0;

            if (firstLetter.toUpperCase() === currentLetter || firstLetter.toLowerCase() === currentLetter) {
                positionLetter = j + 1;



            } else {
                continue;
            }
            
        }
        
    }
    // let lineArray = inputArray[0].split();

    // console.log(lineArray)

    //let position = input.charCodeAt(1)

}

//lettersChangeNumbers('A12b s17G');
lettersChangeNumbers('P34562Z q2576f H456z');