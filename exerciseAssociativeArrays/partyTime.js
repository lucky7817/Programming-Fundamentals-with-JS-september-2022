function partyTime(input) {

    let index = 0;
    let listGuests = [];
    let guest = input[index]
    index++;

    while (guest !== 'PARTY') {

        listGuests.push(guest);

        guest = input[index]
        index++;
    }

    for (let i = index; i < input.length; i++) {
        let currentGuest = input[i];

        for (const guest of listGuests) {

            if (listGuests.find(el => el === currentGuest)) {
                let indexOfListGuests = listGuests.indexOf(currentGuest);
                listGuests.splice(indexOfListGuests, 1); break;
            } else {
                break;
            }
        }
    }
    let counter = listGuests.length;
    console.log(counter);

    let sortedListGuest = listGuests.sort((a, b) => /^\d/.test(b) - /^\d/.test(a));

    for (const guest of sortedListGuest) {
        console.log(`${guest}`);
    }
}

partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']);

// partyTime(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I',
//     'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK',
//     'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi',
//     '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ' ]);