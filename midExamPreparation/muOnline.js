function muOnline(input) {

    let initialHealth = 100;
    let initialBitcoins = 0;
    let counterRooms = 0;

    let inputArr = input.split('|');
    let lengthInputArr = inputArr.length

    for (let i = 0; i < lengthInputArr; i++) {
        let currentRoom = inputArr[i].split(' ');

        let command = currentRoom[0];
        let number = Number(currentRoom[1]);
        counterRooms++;

        switch (command) {
            case 'potion':
                let healthSum = initialHealth + number;
                if (healthSum >= 100) {
                    let healthIncreaseValue = 100 - initialHealth;
                    initialHealth += healthIncreaseValue
                    console.log(`You healed for ${healthIncreaseValue} hp.`);
                    console.log(`Current health: ${initialHealth} hp.`);
                } else {
                    console.log(`You healed for ${number} hp.`);
                    console.log(`Current health: ${initialHealth + number} hp.`);
                }
                break;

            case 'chest':
                initialBitcoins += number
                console.log(`You found ${number} bitcoins.`);
                break;

            default:
                initialHealth -= number;

                if (initialHealth <= 0) {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${counterRooms}`);
                    return;
                } else {
                    console.log(`You slayed ${command}.`);
                }
                break;
        }
    }

    if (lengthInputArr === counterRooms && initialHealth > 0) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${initialBitcoins}`);
        console.log(`Health: ${initialHealth}`);
    }
}

//muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000|");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");