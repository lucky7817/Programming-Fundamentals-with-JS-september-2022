function distinctArray(arr) {

    let uniqueNumArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (!uniqueNumArr.includes(arr[i])) {
            uniqueNumArr.push(arr[i]);
        }  
    }
    console.log(uniqueNumArr.join(' '));

}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);