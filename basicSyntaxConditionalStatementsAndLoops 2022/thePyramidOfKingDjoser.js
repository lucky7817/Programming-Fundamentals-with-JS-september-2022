function thePyramidOfKingDjoser(widthAndLengthBase, incrementLengthStep) {

    let totalStepsOfStone = 0;
    let totalStepsOfMarbel = 0;
    let totalStepsOfLapis = 0;
    let totalGold = 0;
    let countStepsMarbel = 0;

    for (let widthLengthStep = widthAndLengthBase - 2; widthLengthStep > 0; widthLengthStep -= 2) {

        let totalStone = (widthLengthStep * widthLengthStep) * incrementLengthStep;
        totalStepsOfStone += totalStone;
    }
    console.log(`Stone required: ${Math.ceil(totalStepsOfStone)}`);


    for (let marbelVolume = widthAndLengthBase; marbelVolume > 0; marbelVolume -= 2) {
        countStepsMarbel++;

        let sumAboutGold = Math.round(widthAndLengthBase / 2);

        if (sumAboutGold === countStepsMarbel) {

            totalGold = (marbelVolume * marbelVolume) * incrementLengthStep;
        } else if (countStepsMarbel === 5 || countStepsMarbel % 5 == 0) {

            let totalLapis = (((marbelVolume + marbelVolume) * 2) - 4) * incrementLengthStep;
            totalStepsOfLapis += totalLapis;
        } else if (countStepsMarbel > 0) {

            let totalMarbel = (((marbelVolume + marbelVolume) * 2) - 4) * incrementLengthStep;
            totalStepsOfMarbel += totalMarbel;
          
        }
    }

    let finalHeigthPiramid = countStepsMarbel * incrementLengthStep;

    console.log(`Marble required: ${Math.ceil(totalStepsOfMarbel)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalStepsOfLapis)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(finalHeigthPiramid)}`);

}

thePyramidOfKingDjoser(23, 0.5);