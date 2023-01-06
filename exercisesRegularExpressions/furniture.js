function furniture(input) {

    let index = 0;
    let totalMoney = 0;
    const pattern = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+[\.]*[\d]+)!(?<quantity>[\d]+)/g;
    console.log('Bought furniture:');

    while (input[index] !== 'Purchase') {

        let articulRow = input[index];
        let validArticulRow = pattern.exec(articulRow);

        while (validArticulRow !== null) {

            let articulName = validArticulRow.groups['name'];
            console.log(articulName);
            let articulPrice = validArticulRow.groups['price'];
            let articulQuantity = validArticulRow.groups['quantity'];

            totalMoney += articulPrice * articulQuantity;

            validArticulRow = pattern.exec(articulRow);

        }
        index++;
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);