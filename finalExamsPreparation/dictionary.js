function dictionary(input) {

    let allWordsAndDefinitions = input.shift().split(' | ');
    let wordDefinition = allWordsAndDefinitions.map(el => el.split(': '))
    let notebook = {};
    let definition = [];

    for (const wordDef of wordDefinition) {
        let word = wordDef[0];
        definition.push(wordDef[1]);

        notebook[word] = {
            definition: definition,
        }
        

    }
    console.log(notebook);

}

dictionary(["programmer: an animal, which turns coffee into code | programmer: a magician",
"fish | domino",
"Hand Over"]);
