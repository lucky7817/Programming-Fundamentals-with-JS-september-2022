function wordTracker(input) {

    let result = {};
    let words = input.shift().split(' ');
    

    for (const word of words) {
        result[word] = 0;  
    }

    for (const allwords of input) {

        if (result.hasOwnProperty(allwords)) {
            result[allwords]++;
        }   
    }
    
    let sorted = Object.entries(result).sort((a, b) => a[1] - b[1]);

   for (const el of sorted) {
    console.log(`${el[0]} - ${el[1]}`);
   }

}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',   
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]);