function employees(input) {

    let numOfLines = Number(input.shift());

    let pattern = /(?<firstName>[A-Z]{1}[a-z]{2,}) (?<lastName>[A-Z]{1}[a-z]{2,})[#]+(?<position>[A-Z]+[a-z]+&?[A-Z]+[a-z]+&?[A-Z]+[a-z]+)\d{2}(?<company>[A-Z]+[a-z0-9]+ [A-Za-z]{3}.)/g

    for (let i = 0; i < numOfLines; i++) {
        let currentLine = input[i];
        let infoEmployees = currentLine.matchAll(pattern);

        if (currentLine.matchAll(pattern)) {

            for (const line of infoEmployees) {

                let fName = line.groups.firstName;
                let sName = line.groups.lastName;
                let companyPosition = line.groups.position1;
                // let companyPosition2 = line.groups.position2;
                // let companyPosition3 = line.groups.position3;
                let companyName = line.groups.company;

                // if (companyPosition1 !== undefined) {
                console.log(`${fName} ${sName} is ${companyPosition} at ${companyName}`);
                break;
                // } else if (companyPosition2 !== undefined) {
                //     console.log(`${fName} ${sName} is ${companyPosition1} ${companyPosition2} at ${companyName}`);
                //     break;

                // } else if (companyPosition3 !== undefined) {
                //     console.log(`${fName} ${sName} is ${companyPosition1} ${companyPosition2} ${companyPosition3} at ${companyName}`);
                //     break;
                // }
            }
        }
    }
}

employees(["4",
    "Tanya Petrova##Dental&Assistants25Health Ltd.",
    "Kalina Mihova#Occupational&Therapy&Aides00Health Ltd.",
    "George Fill####Orderlies99Health JSC",
    "Lily petrova#Speech&Pathology&Assistants60Health Ltd."]);
