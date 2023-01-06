function storeProvision(available, delivery) {

    const productsInStore = {};

    for (let i = 0; i < available.length; i += 2) {
        let currentProduct = available[i];
        productsInStore[currentProduct] = Number(available[i + 1]);
    }

    for (let j = 0; j < delivery.length; j += 2) {
        let currentProduct = delivery[j];

        if (!productsInStore.hasOwnProperty(currentProduct)) {
            productsInStore[currentProduct] = 0;
        }
        productsInStore[currentProduct] += Number(delivery[j + 1]);
    }

    for (const product in productsInStore) {
        console.log(`${product} -> ${productsInStore[product]}`);
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],

    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);