function fancyBarcodes(input) {

    let barcodeNumbers = Number(input.shift());
    let pattern = /([@]{1}[#]+)[A-Z]{1}[A-Za-z0-9]{4,}[A-Z]{1}\1/g;
    let productGroupNoDigits = '00';
    let productGroupDigits = '';
    let digitsInBarcode = '';

    for (let i = 0; i < barcodeNumbers; i++) {

        let validBarcode = input[i].match(pattern);
    
        if (validBarcode !== null) {
            digitsInBarcode = validBarcode[0].match(/\d+/g);

            if (digitsInBarcode !== null) {

                for (const digit of digitsInBarcode) {
                    productGroupDigits += digit;
                }
                console.log(`Product group: ${productGroupDigits}`);
                productGroupDigits = '';

            } else {
                console.log(`Product group: ${productGroupNoDigits}`);
            }

        } else {
            console.log('Invalid barcode');
        }
    }
}

// fancyBarcodes(["3",
//     "@#FreshFisH@#",
//     "@###Brea0D@###",
//     "@##Che4s6E@##"]);
fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);
