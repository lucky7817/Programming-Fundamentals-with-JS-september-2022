function inventory(input) {

    let items = input.shift().split(', ');

    let currentLine = input.shift();

    while (currentLine !== 'Craft!') {
        let currentCommandLine = currentLine.split(' - ');

        let command = currentCommandLine[0];

        switch (command) {
            case 'Collect':
                let newItem = currentCommandLine[1];

                if (!items.includes(newItem)) {
                    items.push(newItem);
                } else {
                    break;
                }
                break;

            case 'Drop':
                let itemDrop = currentCommandLine[1];
                let indexOfItemDrop = items.indexOf(itemDrop);

                if (items.includes(itemDrop)) {
                    items.splice(indexOfItemDrop, 1);
                } else {
                    break;
                }
                break;

            case 'Combine Items':
                let [oldOneItem, newOneItem] = currentCommandLine[1].split(':');
                let indexOldOneItem = items.indexOf(oldOneItem);

                if (items.includes(oldOneItem)) {
                    items.splice(indexOldOneItem + 1, 0, newOneItem);
                } else {
                    break;
                }
                break;

            case 'Renew':
                let itemRenew = currentCommandLine[1];
                let indexItemRenew = items.indexOf(itemRenew);

                if (items.includes(itemRenew)) {
                    items.splice(indexItemRenew, 1);
                    items.push(itemRenew);
                }
                break;
        }
        currentLine = input.shift();
    }
    console.log(items.join(', '));
}

inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]);
// inventory([
//     'Iron, Sword',
//     'Drop - Bronze',
//     'Combine Items - Sword:Bow',
//     'Renew - Iron',
//     'Craft!'
// ]);