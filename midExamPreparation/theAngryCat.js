function theAngryCat(priceRatingItemsArr, entryPoint, typeOfItems) {

    let leftSum = 0;
    let rightSum = 0;
    let sumPoints = 0;
    let totalPoints = 0;
    let position = '';

    for (let h = priceRatingItemsArr.length / 2; h <= priceRatingItemsArr.length - 2; h++) {
        sumPoints += priceRatingItemsArr[h];
    }
    totalPoints = sumPoints + entryPoint;

    for (let i = priceRatingItemsArr.length / 2; i >= 2; i--) {
        position = 'Left';

        switch (typeOfItems) {
            case 'cheap':
                leftSum += priceRatingItemsArr[i];
                break;

            case 'expensive':
                leftSum += priceRatingItemsArr[i];
                break;
        }
    }

    for (let j = priceRatingItemsArr.length / 2; j <= priceRatingItemsArr.length - 2; j++) {

        switch (typeOfItems) {
            case 'cheap':
                rightSum += priceRatingItemsArr[j];
                break;

            case 'expensive':
                rightSum += priceRatingItemsArr[j];
                break;
        }
    }

    if (leftSum < totalPoints && rightSum < totalPoints && typeOfItems === 'cheap' && leftSum === rightSum) {
        console.log(`${position} - ${leftSum}`);

    } else if (leftSum > rightSum && typeOfItems === 'cheap') {
        console.log(`${position} - ${leftSum}`);

    } else if (rightSum > leftSum && typeOfItems === 'cheap') {
        console.log(`Right - ${rightSum}`);
    }


    if (leftSum >= totalPoints && rightSum >= totalPoints && typeOfItems === 'expensive' && leftSum === rightSum) {
        console.log(`${position} - ${leftSum}`);

    } else if (leftSum > rightSum && typeOfItems === 'expensive') {
        console.log(`${position} - ${leftSum}`);

    } else if (rightSum > leftSum && typeOfItems === 'expensive') {
        console.log(`Right - ${rightSum}`);
    }


}

//theAngryCat([1, 5, 1], 1, 'cheap');
//theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, 'expensive');
theAngryCat([5, 10, 12, 5, 4, 20], 3, 'cheap');
