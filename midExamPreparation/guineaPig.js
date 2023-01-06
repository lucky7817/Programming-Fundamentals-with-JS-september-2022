function guineaPig(array) {

    let quantityFoodInGg = (Number(array.shift())) * 1000;
    let quantityHayInGg = (Number(array.shift())) * 1000;
    let quantityCoverInGg = (Number(array.shift())) * 1000;
    let pigWeightGg = (Number(array.shift())) * 1000;

    let neededFoodEveryDayInGr = 300;

    for (let i = 1; i <= 30; i++) {

        if (i % 2 != 0 && i % 3 != 0) {
            quantityFoodInGg -= neededFoodEveryDayInGr;

            if (quantityFoodInGg <= 0) {
                console.log('Merry must go to the pet store!');
                return;

            }
        }

        if (i % 2 === 0) {
            quantityFoodInGg -= neededFoodEveryDayInGr;
            quantityHayInGg = quantityHayInGg - (quantityFoodInGg * 0.05);

            if (quantityFoodInGg <= 0 || quantityHayInGg <= 0) {
                console.log('Merry must go to the pet store!');
                return;
            }
        }

        if (i % 3 === 0 && i % 2 === 0) {
            quantityCoverInGg = quantityCoverInGg - (pigWeightGg / 3);

            if (quantityFoodInGg <= 0 || quantityCoverInGg <= 0) {
                console.log('Merry must go to the pet store!');
                return;
            }
        } 
        
        if (i % 3 === 0 && i % 2 != 0) {
            quantityFoodInGg -= neededFoodEveryDayInGr;
            quantityCoverInGg = quantityCoverInGg - (pigWeightGg / 3);

            if (quantityFoodInGg <= 0 || quantityCoverInGg <= 0) {
                console.log('Merry must go to the pet store!');
                return;
            }
        }
    }
    console.log(`Everything is fine! Puppy is happy! Food: ${(quantityFoodInGg / 1000).toFixed(2)}, Hay: ${(quantityHayInGg / 1000).toFixed(2)}, Cover: ${(quantityCoverInGg / 1000).toFixed(2)}.`);

}

//guineaPig(["10", "5", "5.2", "1"]);
//guineaPig(["1", "1.5", "3", "1.5"]);
guineaPig(["9","5","5.2","1"]);

