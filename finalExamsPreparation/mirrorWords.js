function mirrorWords(input) {

    let pattern = /([#]{1}|[@]{1})(?<firstWord>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1/g;
    if (!pattern.test(input[0])) {
        console.log('No word pairs found!');
        console.log('No mirror words!');
        return;
    }

    let words = input[0].matchAll(/([#]{1}|[@]{1})(?<firstWord>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1/g);
    let mirrorWordsArray = [];
    let counter = 0;

    for (const word of words) {
        counter++;

        let fWord = word[2];
        let sWord = word[3];

        let sWordSplited = sWord.split('');
        let sWordReverse = sWordSplited.reverse().join('');

        if (fWord === sWordReverse) {
            mirrorWordsArray.push(`${fWord} <=> ${sWord}`);
        }
        // } else {
        //     continue;
        // }
    }
    console.log(`${counter} word pairs found!`);

    if (mirrorWordsArray.length === 0) {
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are:');
        console.log(mirrorWordsArray.join(', '));
    }
}

mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
//mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
//mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ]);
mirrorWords(['shsh@#poOl##loOp#@leveL@@Level@'])