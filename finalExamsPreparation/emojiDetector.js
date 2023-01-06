function emojiDetector(input) {

    let text = input[0];
    let threshold = 1;
    let emojiName = '';
    let emojiOriginMatch = '';
    let coolEmojis = [];
    let emojiCount = 0;

    let digits = text.match(/\d/g);
    let emojis = text.matchAll(/(:{2}|\*{2})(?<emojiName>[A-Z][a-z]{2,})\1/g);
   
    
    for (const emoji of emojis) {
        emojiName = emoji[0];
        emojiOriginMatch = emoji.groups.emojiName; 
        emojiCount++;
        let emojiCoolnes = 0;

        for (let i = 0; i < emojiOriginMatch.length; i++) {
            emojiCoolnes += emojiOriginMatch.charCodeAt(i);
        }
        
        if (emojiCoolnes >= threshold) {
            coolEmojis.push(emojiName);
        }
    }

    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
    
    for (const emoji of coolEmojis) {
        console.log(emoji);       
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])