function oddOccurrences(input) {

    let result = new Map();
    let allSymbols = input.split(' ').map(w => w.toLowerCase());

    for (const symbol of allSymbols) {

        if (!result.has(symbol)) {
            //result[symbol] = 1;
            result.set(symbol, 1);
        } else {
            //result[symbol]++;
            result.set(symbol, result.get(symbol) + 1 || 1);
        }       
    }

    // let resultArr = Object.entries(result);
    // let oddSymbols = '';

    // for (const key in result) {
    //     if (result[key] % 2 === 0) {
    //         delete result[key];
    //     }
        
    // }

    for (const kvp of result.entries()) {

        if (kvp[1] % 2 === 0) {
            result.delete(kvp[0]);

        }  
    }

    let printKeys = '';

    result.forEach((value, key) => {
        printKeys += `${key}` + ' ';
        //console.log(`${key}`)
        
    });
    console.log(printKeys);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');