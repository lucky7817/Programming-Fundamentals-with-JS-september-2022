function computerStore(input) {

    let totalNetSum = 0;
    let typeOfCostumer = '';
    let taxSum = 0;
    let totalSumWithTaxes = 0;

    for (const price of input) {

        if (price === 'special' || price === 'regular') {
            typeOfCostumer = price;
            break;
        }

        if (Number(price) < 0) {
            console.log('Invalid price!');
            continue;
        }

        totalNetSum += Number(price);
    }

    if (totalNetSum === 0) {
        console.log('Invalid order!'); 
        return;
    }

    taxSum = totalNetSum * 0.2
    totalSumWithTaxes = totalNetSum + taxSum;

    if (typeOfCostumer === 'special') {
        totalSumWithTaxes = totalSumWithTaxes - (totalSumWithTaxes * 0.1);

        console.log(`Congratulations you've just bought a new computer!
        Price without taxes: ${totalNetSum.toFixed(2)}$
        Taxes: ${taxSum.toFixed(2)}$
        -----------
        Total price: ${totalSumWithTaxes.toFixed(2)}$`);
    } else {

        console.log(`Congratulations you've just bought a new computer!
        Price without taxes: ${totalNetSum.toFixed(2)}$
        Taxes: ${taxSum.toFixed(2)}$
        -----------
        Total price: ${totalSumWithTaxes.toFixed(2)}$`);
    }
}

// computerStore([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
// ]);
// computerStore([
//     '1023', 
//     '15', 
//     '-20',
//     '-5.50',
//     '450', 
//     '20', 
//     '17.66', 
//     '19.30', 'regular'
//     ]);
computerStore(['regular']);    
