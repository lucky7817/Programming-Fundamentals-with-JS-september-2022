function groceryShopping(input) {

    let productList = input.shift().split('|');

    let currentLine = input.shift();

    while (currentLine !== 'Shop!') {
        let splitedCurrentLine = currentLine.split('%');

        let command = splitedCurrentLine[0];

        switch (command) {
            case 'Important':
                let productMove = splitedCurrentLine[1];


                if (productList.includes(productMove)) {
                    let index = productList.indexOf(productMove);
                    productList.splice(index, 1);
                    productList.unshift(productMove);
                } else {
                    productList.unshift(productMove);
                }
                break;

            case 'Add':
                let productAdd = splitedCurrentLine[1];

                if (!productList.includes(productAdd)) {
                    productList.push(productAdd);
                } else {
                    console.log('The product is already in the list.');
                }
                break;

            case 'Swap':
                let productSwap1 = splitedCurrentLine[1];
                let productSwap2 = splitedCurrentLine[2];

                if (productList.includes(productSwap1) && productList.includes(productSwap2)) {
                    let index1 = productList.indexOf(productSwap1);
                    let index2 = productList.indexOf(productSwap2);

                    [productList[index1], productList[index2]] = [productList[index2], productList[index1]];

                } else if (!productList.includes(productSwap1) || !productList.includes(productSwap2)) {

                    if (!productList.includes(productSwap1)) {
                        console.log(`Product ${productSwap1} missing!`);
                    } else if (!productList.includes(productSwap2)) {
                        console.log(`Product ${productSwap2} missing!`);
                    }
                }
                break;

            case 'Remove':
                let productRemove = splitedCurrentLine[1];

                if (productList.includes(productRemove)) {
                    let indexRemove = productList.indexOf(productRemove);
                    productList.splice(indexRemove, 1);
                } else {
                    console.log(`Product ${productRemove} isn't in the list.`);
                }
                break;

            case 'Reverse':
                productList.reverse()
                break;
        }
        currentLine = input.shift();
    }

    for (let i = 0; i < productList.length; i++) {
        let current = productList[i];
        console.log(`${i + 1}. ${current}`);

    }
}

groceryShopping(["eggs|milk|bread|fish",
    "Important%bread",
    "Swap%eggs%tomato",
    "Shop!"]);
    groceryShopping