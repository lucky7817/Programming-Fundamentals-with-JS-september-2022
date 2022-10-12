function equalSums(array) {

    //     let foundIndex = 'no';

    //     for (let i = 0; i < array.length; i++) {
    //         let leftSum = 0;
    //         let rightSum = 0;

    //         for (let l = 0; l < i; l++) {
    //             leftSum = leftSum + array[l];   
    //         }

    //         for (let r = i + 1; r < array.length; r++) {
    //             rightSum = rightSum + array[r];
    //         }

    //         if (leftSum === rightSum) {
    //             foundIndex = i;

    //         }
    //     }
    //     console.log(foundIndex);
    // }

    let sumLeft = 0;
    let sumRight = 0;
    let countLoop = 0;
    let foundIndex = 'no';


    for (let i = 0; i < array.length; i++) {
        sumLeft += Number(array[i]);

        if (array.length === 1) {
            console.log(0); return;
        } else if (sumLeft === sumRight && (i + 1) != array.length - 1) {
            foundIndex = i + 1;
            console.log(foundIndex);
            return;
        } else if (sumLeft === sumRight) {
            break;
        }

        for (let j = (array.length - 1) - countLoop; j >= 0; j--) {
            sumRight += Number(array[j]);

            countLoop++;

            if (sumLeft > sumRight) {
                continue;
            } else if (sumLeft === sumRight && i + 1 != array.length) {
                foundIndex = i + 1
                console.log(foundIndex);
                return;
            } else {
                break;
            }
        }
    }
    console.log(foundIndex);
}


//equalSums([1, 2, 3, 3]);
//equalSums([1, 2]);
//equalSums([1]);
// equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);