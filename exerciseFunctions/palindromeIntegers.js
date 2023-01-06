function palindromeIntegers(arrayOfNum) {

    for (let i = 0; i < arrayOfNum.length; i++) {
        let currentNumToString = arrayOfNum[i].toString();
        let reverseCurrentString = (currentNumToString.split('').reverse()).join('');
        
        if (currentNumToString === reverseCurrentString) {
            console.log(true);
        } else {
            console.log(false);
        }   
    }
}

palindromeIntegers([123,323,421,121]);