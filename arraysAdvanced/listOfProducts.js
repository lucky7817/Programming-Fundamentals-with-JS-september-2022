function listOfProducts(arrayOfProducts) {

    let sortedArray = arrayOfProducts.sort();
    let newArray = [];
    let lengthArray = sortedArray.length

    for (let i = 0; i < lengthArray; i++) {
        let currentProduct = `${i + 1}.${arrayOfProducts[i]}`;
        newArray.push(currentProduct);
    }

    for (const currentProduct of newArray)
        console.log(currentProduct);
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);