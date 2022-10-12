function addAndRemove(array) {

    let currentCommand = 0;
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        currentCommand = array[i];

        for (let j = 1 + i; j <= array.length; j++) {
        
            if (currentCommand === 'add') {
                newArray.push(j); break;
            } else if (currentCommand === 'remove') {
                newArray.splice(newArray.length - 1, 1); break;
            }         
        }
    }
    if (newArray.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArray.join(' '));
    }
}

//addAndRemove(['add', 'add', 'add', 'add']);
//addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);