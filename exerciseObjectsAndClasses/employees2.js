function employees2(list) {

    let employeeList = {};

    list.forEach(person => {
        employeeList[person] = person.length;   
    });

    for (const key in employeeList) {
        console.log(`Name: ${key} -- Personal Number: ${employeeList[key]}`);
    }
}

employees2(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);

