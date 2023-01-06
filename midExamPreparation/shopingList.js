function shopingList(array) {

    let shopList = array.shift().split('!');
    let currentLine = array.shift();

    while (currentLine != 'Go Shopping!') {

        let splitedCurrentLine = currentLine.split(' ');
        let command = splitedCurrentLine[0];

        for (let i = 1; i < splitedCurrentLine.length; i++) {

            switch (command) {
                case 'Urgent':
                    if (!shopList.includes(splitedCurrentLine[i])) {
                        shopList.unshift(splitedCurrentLine[i]);
                    }
                    break;

                case 'Unnecessary':
                    if (shopList.includes(splitedCurrentLine[i])) {
                        shopList.splice(shopList.indexOf(splitedCurrentLine[i]), 1);
                    }
                    break;

                case 'Correct':

                    if (shopList.includes(splitedCurrentLine[i])) {
                        shopList.splice(shopList.indexOf(splitedCurrentLine[i]), 1, splitedCurrentLine[i + 1]);
                    }
                    break;

                    case 'Rearrange':

                        if (shopList.includes(splitedCurrentLine[i])) {
                            let itemForRearrange = splitedCurrentLine[i];
                            shopList.splice(shopList.indexOf(splitedCurrentLine[i]), 1);
                            shopList.push(itemForRearrange);

                        }
                    break;
            }
            currentLine = array.shift();
            break;
        }
    }
    console.log(shopList.join(', '));
}

// shopingList(["Tomatoes!Potatoes!Bread",
//     "Unnecessary Milk",
//     "Urgent Tomatoes",
//     "Go Shopping!"]);
shopingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
    