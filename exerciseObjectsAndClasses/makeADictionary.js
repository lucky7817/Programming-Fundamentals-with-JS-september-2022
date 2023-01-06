function makeADictionary(arr) {

    let newArray = [];
    let term = '';
    let nextTerm = '';

    arr.forEach(line => {
        newArray.push(line);
    });

    for (let i = 0; i < newArray.length; i++) {
        let currentLine = newArray[i].split(':');

        term = currentLine[i];

        for (let j = 1; j < newArray.length; j++) {
            let currentNextLine = newArray[j].split(':');

            nextTerm = currentNextLine[0];

            if (term === nextTerm) {

                newArray.splice(i, 1, newArray[j]);
                newArray.splice(j, 1);
            }
        }
    }

    newArray.sort();
    for (const line of newArray) {
        let stringToJs = JSON.parse(line);

        for (const key in stringToJs) {
            console.log(`Term: ${key} => Definition: ${stringToJs[key]}`);
        }
    }
}


makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified transmitted, or recorded."}'
]);
