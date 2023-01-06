function battleManager(input) {

    let currentLine = input.shift();
    let battle = {};

    while (currentLine !== 'Results') {
        let splitedLine = currentLine.split(':')
        let command = splitedLine[0];

        switch (command) {
            case 'Add':
                let person = splitedLine[1];
                let health = Number(splitedLine[2]);
                let energy = Number(splitedLine[3]);

                if (!battle.hasOwnProperty(person)) {

                    battle[person] = {
                        health: health,
                        energy: energy,
                    };
                } else {
                    battle[person].health += health;
                }
                break;

            case 'Attack':
                let attackerName = splitedLine[1];
                let defenderName = splitedLine[2];
                let damage = Number(splitedLine[3]);

                if (battle.hasOwnProperty(attackerName) && battle.hasOwnProperty(defenderName)) {
                    battle[defenderName].health -= damage;
                    battle[attackerName].energy -= 1;

                    if (battle[defenderName].health <= 0) {
                        console.log(`${defenderName} was disqualified!`);
                        delete battle[defenderName];
                    }

                    if (battle[attackerName].energy <= 0) {
                        console.log(`${attackerName} was disqualified!`);
                        delete battle[attackerName];
                    }
                }
                break;

            case 'Delete':
                let userName = splitedLine[1];

                if (battle.hasOwnProperty(userName)) {
                    delete battle[userName];
                }

                if (userName === 'All') {

                    for (const key in battle) {
                        delete battle[key];
                    }
                }
                break;
        }

        currentLine = input.shift();
    }
    let length = Object.keys(battle).length
    console.log(`People count: ${length}`);

    for (const key in battle) {
        console.log(`${key} - ${battle[key].health} - ${battle[key].energy}`);
    }
}

// battleManager(["Add:Mark:1000:5",
//     "Add:Clark:1000:2",
//     "Attack:Clark:Mark:500",
//     "Attack:Clark:Mark:800",
//     "Add:Charlie:4000:10",
//     "Results"]);
battleManager(["Add:Bonnie:3000:5",
    "Add:Kent:10000:10",
    "Add:Johny:4000:10",
    "Attack:Johny:Bonnie:400",
    "Add:Johny:3000:5",
    "Add:Peter:7000:1",
    "Delete:Kent",
    "Results"]);

