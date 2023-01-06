function googleSearches(input) {

    let incomeOneSearch = input.shift();
    incomeOneSearch = Number(incomeOneSearch);

    let numberOfUsers = input.shift();
    numberOfUsers = Number(numberOfUsers);
    let newIndex = 0;
    let money = 0;

    for (let i = 0; i < input.length; i++) {
        let numOfSearchesEachUser = Number(input[i]);

        if (numOfSearchesEachUser > 5 && i !== newIndex + 3 && i !== 2) {
            money += (incomeOneSearch * numOfSearchesEachUser) * 2;
        } else if (numOfSearchesEachUser === 1) {
            continue;
        } else if (numOfSearchesEachUser <= 5 && i !== newIndex + 3 && i !== 2) {
            money += incomeOneSearch * numOfSearchesEachUser;
        } else if (numOfSearchesEachUser > 5 && i === 0) {
            money += (incomeOneSearch * numOfSearchesEachUser) * 2;
        } else if (numOfSearchesEachUser <= 5 && i === 0) {
            money += incomeOneSearch * numOfSearchesEachUser;
        }

        if (i === 2) {
            newIndex = i;

            if (numOfSearchesEachUser > 5) {
                money += ((incomeOneSearch * numOfSearchesEachUser) * 3) * 2;
            } else if (numOfSearchesEachUser === 1) {
                continue;
            } else if (numOfSearchesEachUser <= 5) {
                money += (incomeOneSearch * numOfSearchesEachUser) * 3;
            }

        } else if (i === newIndex + 3) {
            newIndex = i
            if (numOfSearchesEachUser > 5) {
                money += ((incomeOneSearch * numOfSearchesEachUser) * 3) * 2;
            } else if (numOfSearchesEachUser === 1) {
                continue;
            } else if (numOfSearchesEachUser <= 5) {
                money += (incomeOneSearch * numOfSearchesEachUser) * 3;
            }
        }
    }
    console.log(`Total money earned: ${money.toFixed(2)}`);

}

// googleSearches(["5.5",
//     "3",
//     "1",
//     "10",
//     "5"]);
// googleSearches(["0.5",
//     "6",
//     "3",
//     "5",
//     "16",
//     "0",
//     "6",
//     "1"]);
googleSearches(["3.0",
    "7",
    "0",
    "1",
    "2",
    "3",
    "4",
    "6",
    "15"]);


