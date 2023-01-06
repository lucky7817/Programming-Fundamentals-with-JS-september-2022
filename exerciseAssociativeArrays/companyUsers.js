function companyUsers(input) {

    let companyEmployeeList ={};

    input.forEach(line => {
        let [company, employeeID] = line.split(' -> ');

        if (!companyEmployeeList.hasOwnProperty(company)) {
            companyEmployeeList[company] = [];
        }
        companyEmployeeList[company].push(employeeID);
    });

    let sortedCompanies = Object.entries(companyEmployeeList).sort((a, b) => a[0].localeCompare(b[0]))

    sortedCompanies.forEach(el => {
        let copmany = el[0];
        let allCompanyID = el[1];

        console.log(copmany);

        let uniqueID = new Set(allCompanyID);

        for (const id of uniqueID) {
            console.log(`-- ${id}`);
        }
        
    });
}

companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);