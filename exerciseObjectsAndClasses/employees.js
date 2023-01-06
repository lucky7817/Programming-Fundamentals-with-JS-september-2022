function employees(array) {

    class Employee {
        constructor(name, personalNumber) {
            this.name = name;
            this.personalNumber = personalNumber;

            console.log(`Name: ${name} -- Personal Number: ${personalNumber}`);
        }    
    }

    let personalNumber = 0;

    for (let j = 0; j < array.length; j++) {
            
        let name = array[j];
        personalNumber = name.length;

        let employee = new Employee(name, personalNumber);
    }
}

employees([
    'Silas Butler',   
    'Adnaan Buckley',  
    'Juan Peterson',  
    'Brendan Villarreal'  
 ]);