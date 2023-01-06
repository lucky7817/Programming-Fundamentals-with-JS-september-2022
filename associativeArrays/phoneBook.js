function phoneBook(array) {

    let listNamePhones = {};

    array.forEach(line => {
        let [name, phone] = (line.split(' '));

        listNamePhones[name] = phone; 
    });

    for (const name in listNamePhones) {
        console.log(`${name} -> ${listNamePhones[name]}`);
    }
}

phoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344']);