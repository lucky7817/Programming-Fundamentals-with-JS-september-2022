function legendaryFarming(input) {
    let inputArr = input.split(/\s+/g);
    let quantity = 0;
    let material = '';
    let materials = {};
    let junkMaterials = {};
    let counterDoubleValue = 0;

    for (let i = 0; i < inputArr.length; i += 2) {
        quantity = Number(inputArr[i]);

        for (let j = i + 1; j < i + 2; j += 2) {
            material = inputArr[j].toLowerCase();

        }

        if (material === 'shards' || material === 'fragments' || material === 'motes') {

            if (materials.hasOwnProperty(material)) {
                materials[material] += quantity;
            } else {
                materials[material] = quantity;
            }

            if (materials[material] >= 250) {

                if (material === 'shards') {
                    materials[material] -= 250;
                    console.log('Shadowmourne obtained!');
                } else if (material === 'fragments') {
                    materials[material] -= 250;
                    console.log('Valanyr obtained!');
                } else if (material === 'motes') {
                    materials[material] -= 250;
                    console.log('Dragonwrath obtained!');
                }
            }

        } else {

            if (junkMaterials.hasOwnProperty(material)) {
                junkMaterials[material] += quantity;
            } else {
                junkMaterials[material] = quantity;
            }
        }
    }
    let materialsArr = Object.entries(materials);
    console.log(materialsArr);

    for (let k = 0; k < materialsArr.length; k++) {
        let currentNum = materialsArr[k][1];

        for (let c = k + 1; c < materialsArr.length; c++) {
            let currentSecNum = materialsArr[c][1];

            if (currentNum === currentSecNum) {
                counterDoubleValue++
                k = materialsArr.length; break;
            }
        }
    }

    if (counterDoubleValue > 0) {
        materialsArr.sort((a, b) => a[0].localeCompare(b[0]));
    } else {
        materialsArr.sort((a, b) => b[1] - a[1]);
    }

    for (const el of materialsArr) {
        console.log(`${el[0]}: ${el[1]}`);
    }

    let junkMaterialsArr = Object.entries(junkMaterials).sort((a, b) => a[0].localeCompare(b[0]));

    for (const junk of junkMaterialsArr) {
        console.log(`${junk[0]}: ${junk[1]}`);
    }
}

//legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');