function worldTour(input) {

    let stops = input.shift();

    let commandLine = input.shift();

    while (commandLine !== 'Travel') {

        let splitedCommandLine = commandLine.split(':');
        let command = splitedCommandLine.shift();

        switch (command) {
            case 'Add Stop':
                let index = Number(splitedCommandLine[0]);
                let string = splitedCommandLine[1];

                if (stops[index]) {
                    stops = stops.slice(0, index) + string + stops.slice(index);
                    console.log(stops);
                } else {
                    console.log(stops);
                }
                break;

            case 'Remove Stop':
                let startIndex = Number(splitedCommandLine[0]);
                let endIndex = Number(splitedCommandLine[1]);

                if (stops[startIndex] && stops[endIndex]) {
                    let partOfStops = stops.substring(startIndex, endIndex + 1);
                    stops = stops.replace(partOfStops, '');
                    console.log(stops);
                } else {
                    console.log(stops);
                }
                break;

            case 'Switch':
                let oldString = splitedCommandLine[0];
                let newString = splitedCommandLine[1];

                if (stops.includes(oldString)) {
                    stops = stops.replace(oldString, newString)
                    console.log(stops);
                } else {
                    console.log(stops);
                }
                break;
        }
        commandLine = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`)
}

// worldTour(["Hawai::Cyprys-Greece",
//     "Add Stop:7:Rome",
//     "Remove Stop:11:16",
//     "Switch:Hawai:Bulgaria",
//     "Travel"]);
worldTour(['Albania:Bulgaria:Cyprus:Deuchland',
    'Add Stop:3:Nigeria',
    'Remove Stop:4:8',
    'Switch:Albania:Azərbaycan',
    'Travel']);
