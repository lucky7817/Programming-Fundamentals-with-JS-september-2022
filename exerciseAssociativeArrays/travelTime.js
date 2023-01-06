function travelTime(input) {

    let result = {};

    for (const line of input) {

        let [country, town, price] = line.split(' > ');

        //town = town.charAt(0).toUpperCase() + town.slice(1);

        if (!result.hasOwnProperty(country)) {
            result[country] = {};
        }

        if (!result.hasOwnProperty(town)) {
            result[country][town] = Number.MAX_SAFE_INTEGER;
           
        }

        if (result[country].hasOwnProperty(town)) {
            if (result[country][town] > Number(price)) {
                result[country][town] = Number(price);
            }
        }   
    }

    let sortedCountry = Object.keys(result).sort((a, b) => {
        return a.toLowerCase().localeCompare(b.toLowerCase())

    });

    for (const country of sortedCountry) {

        let innerResult = '';
        innerResult += (country + ' -> ');

        let sortedTownByPrice = Object.keys(result[country]).sort((t1, t2) => {
            return result[country][t1] - result[country][t2];
        });

        for (const obj of sortedTownByPrice) {
            innerResult += (obj + ' -> ');
            innerResult += (result[country][obj] + ' ');   
        }
        console.log(innerResult); 
    }  
}

// travelTime([
//     "Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"
// ]);
travelTime([
    'Bulgaria > Sofia > 5000', 
    'Bulgaria > Sofia > 25000', 
    'Kalimdor > Orgrimar > 25000', 
    'Albania > Tirana > 25000',   
    'Bulgaria > Varna > 25010',  
    'Bulgaria > Lukovit > 10' 
    ]);