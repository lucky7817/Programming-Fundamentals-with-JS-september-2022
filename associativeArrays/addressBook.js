function addressBook(array) {

    let addressList = {};

    for (const line of array) { 
        let [name, address] = line.split(':');

        if (addressList[name]) {
            addressList[name] = address;
        } else {
            addressList[name] = address;
        }    
    }

    let addressBookArr = Object.entries(addressList);

    addressBookArr.sort((a, b) => a[0].localeCompare(b[0]));

    let sortedAddressBook = Object.fromEntries(addressBookArr);

    for (const name in sortedAddressBook) {
        console.log(`${name} -> ${sortedAddressBook[name]}`);
        
    }
}

addressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd']);