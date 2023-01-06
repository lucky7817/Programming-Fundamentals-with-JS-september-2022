function arenaTier(array) {

    let result = {};
    let totalSkills = 0;

    for (let i = 0; i < array.length; i++) {
        let line = array[i];

        if (line === 'Ave Cesar') break;

        if (line.includes('vs')) {
            let [gladiatorFirst, gladiatorSecond] = line.split(' vs ');

            if (result.hasOwnProperty(gladiatorFirst) && result.hasOwnProperty(gladiatorSecond)) {

                for (const keyFirst in result[gladiatorFirst]) {
                    let currentTechniqueF = keyFirst;

                    for (const keySecond in result[gladiatorSecond]) {
                        let currentTechniqueS = keySecond;

                        if (currentTechniqueF === currentTechniqueS) {
                            if (Object.values(result[gladiatorFirst][currentTechniqueF]) > Object.values(result[gladiatorSecond][currentTechniqueS])) {
                                delete result[gladiatorSecond];
                            } else if (Object.values(result[gladiatorFirst][currentTechniqueF]) < Object.values(result[gladiatorSecond][currentTechniqueS])) {
                                delete result[gladiatorFirst];
                            }
                        } else {
                            continue;
                        }      
                    }  
                }
                continue;
                
            } else {
                continue;
            }
        }

        let [gladiator, technique, skill] = line.split(' -> ');
        skill = Number(skill);

        if (!result.hasOwnProperty(gladiator)) {
            result[gladiator] = {};
        }

        if (!result[gladiator].hasOwnProperty(technique)) {
            result[gladiator][technique] = [];
        }

        if (result[gladiator].hasOwnProperty(technique)) {
            result[gladiator][technique].push(skill);

            if (result[gladiator][technique].length > 1) {
                result[gladiator][technique] = [Math.max(...result[gladiator][technique])];
            }
        }
    }

    for (const [key, value] of Object.entries(result)) {
        let gladiatorName = key;
        totalSkills = 0;

        for (const skill of Object.entries(value)) {
            let techniqieName = skill[0];
            let techniqueValue = skill[1][0];
            let quantityTechnique = skill.length / 2;
            totalSkills += techniqueValue;
            console.log(`${gladiatorName}: ${totalSkills} skill\n- ${techniqieName} <!> ${techniqueValue}`);
        }
    }
    //console.log(typeof result);
}
// arenaTier([
//     'Stefan -> Duck -> 200',
//     'Stefan -> Duck -> 250',
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Ave Cesar'
// ]);
arenaTier(['Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar']);