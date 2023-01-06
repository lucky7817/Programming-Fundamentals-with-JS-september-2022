function cookingMasterclass(array) {

    let budget = array.shift();
    let students = array.shift();
    let priceFlour = array.shift();
    let priceSingleEgg = array.shift();
    let priceSingleApron = array.shift();
    let neededFlour = 0;

    if (students % 5 === 0) {
        neededFlour = (students - (students / 5)) * priceFlour; 
    } else {
        neededFlour = students * priceFlour;
    }

    let neededEggs = students * 10 * priceSingleEgg;
    let neededApron = Math.ceil((students * 1.2)) * priceSingleApron;

    let totalExpenses = neededFlour + neededEggs + neededApron;
    let nedeedMoney = 0;

    if (totalExpenses <= budget) {
        console.log(`Items purchased for ${(totalExpenses.toFixed(2))}$.`);
    } else {
        nedeedMoney = (totalExpenses - budget).toFixed(2)
        console.log(`${nedeedMoney}$ more needed.`);
    }
}

cookingMasterclass([100, 25, 4.0, 1.00, 6.0]);