function blackFlag(arr) {

    const days = Number(arr.shift());
    const plunderForADay = Number(arr.shift());
    const expectedPlunder = Number(arr.shift());
    let collectedPlunder = 0;

    for (let i = 1; i <= days; i++) {

        collectedPlunder += plunderForADay;

        if (i % 3 === 0) {
            // every third day +50% of the daily plunder
            collectedPlunder += plunderForADay * 0.5;
        }

        if (i % 5 === 0){
            // every fifth day -30% of total plunder
            collectedPlunder -= collectedPlunder * 0.3;
        }   
    }
    if (collectedPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${collectedPlunder.toFixed(2)} plunder gained.`);
    } else if (collectedPlunder < expectedPlunder) {
        let percentageLeft = (collectedPlunder / expectedPlunder) * 100;
        console.log(`Collected only ${percentageLeft.toFixed(2)}% of the plunder.`);
    }     
}

//blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);