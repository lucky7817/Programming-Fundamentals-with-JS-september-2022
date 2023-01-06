function coffeeLover(array) {

    let coffeeList = array.shift().split(' ');
    let countOfCommands = Number(array.shift());

    let counter = 0;

    let currentCommands = array.shift();

    while (counter != countOfCommands) {

        let splitCurrentCommands = currentCommands.split(' ');
        let copyOfCoffeeList = coffeeList.slice(0);
        let command = splitCurrentCommands[0];
        let firstStringCommand = '';
        let newCoffeeType = '';
        let firstNum = 0;
        let secondNum = 0;

        if (splitCurrentCommands.length === 3) {

            if (splitCurrentCommands[1] === 'first') {
                firstStringCommand = splitCurrentCommands[1];
                secondNum = Number(splitCurrentCommands[2]);
            } else if (splitCurrentCommands[1] === 'last') {
                firstStringCommand = splitCurrentCommands[1];
                secondNum = Number(splitCurrentCommands[2]);
            } else {
                firstNum = Number(splitCurrentCommands[1]);
                secondNum = Number(splitCurrentCommands[2]);
            }
        } else if (splitCurrentCommands.length === 2) {
            newCoffeeType = splitCurrentCommands[1];
        }

        switch (command) {

            case 'Include':
                coffeeList.push(newCoffeeType);
                break;

            case 'Remove':
                if (coffeeList[secondNum]) {

                    if (firstStringCommand === 'first') {
                        coffeeList.splice(0, secondNum);
                    } else {
                        coffeeList.splice(coffeeList.length - 1, secondNum);
                    }
                }
                break;

            case 'Prefer':
                if (coffeeList[firstNum] && coffeeList[secondNum]) {
                    coffeeList.splice(secondNum, 1, copyOfCoffeeList[firstNum]);
                    coffeeList.splice(firstNum, 1, copyOfCoffeeList[secondNum]);
                }
                break;

            case 'Reverse':
                coffeeList.reverse();
                break;
        }
        counter++;
        currentCommands = array.shift();
    }
    console.log(`Coffees:\n${coffeeList.join(' ')}`);
}

// coffeeLover(["Arabica Liberica Carrieriana Magnistipula Robusta BulkCoffee StrongCoffee", "5", "Include TurkishCoffee", "Remove first 2",
//     "Remove last 1", "Prefer 3 1", "Reverse"]);

coffeeLover(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
    "3",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 4 1"])    