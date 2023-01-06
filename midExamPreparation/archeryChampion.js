function archeryChampion(input) {

    let targets = input.shift().split('|');

    let currentLine = input.shift();

    while (currentLine !== 'Game over') {
        let splitedCurrentLine = currentLine.split('@');

        let command = splitedCurrentLine[0];

        switch (command) {
            case 'Shoot Left':
                let startIndex = Number(splitedCurrentLine[1]);
                let length = Number(splitedCurrentLine[2]);

                let endIndex = startIndex + (length + 2);
                let current

                if (targets[startIndex] === undefined) {
                    continue;
                }
                if (startIndex === 0 && targets[endIndex - 1] !== undefined) {
                    for (let i = endIndex - 1; i === endIndex - 1; i++) {
                        current = Number(targets[i]) - 5;
                    }
                    targets.splice(endIndex - 1, 1, current.toString());
                } else if (startIndex > 0 && targets[endIndex] !== undefined) {
                    for (let j = endIndex; j === endIndex; j++) {
                        current = Number(targets[j]) - 5;
                    }
                    targets.splice(endIndex, 1, current.toString());
                }

                // if (startIndex === 0 && targets[endIndex - 1] === undefined) {

                // }
                break;

            case 'Shoot Right':
                let start = Number(splitedCurrentLine[1]);
                let length2 = Number(splitedCurrentLine[2]);

                let end = start + (length2 + 2);
                

                if (targets[start] === undefined) {
                    continue;
                }
                if (start === targets.length - 1 && targets[end - 1] !== undefined) {
                    for (let i = targets.length - 1; i === targets.length - 1; i--) {
                        current = Number(targets[i]) - 5;
                    }
                    targets.splice(end - 1, 1, current.toString());
                } else if (start > targets.length - 1 && targets[end] !== undefined) {
                    for (let j = end; j === end; j--) {
                        current = Number(targets[j]) - 5;
                    }
                    targets.splice(end, 1, current.toString());
                }

                // if (startIndex === 0 && targets[endIndex - 1] === undefined) {

                // }
                break;

            case 'Reverse':
                targets = targets.reverce();

        }
        currentLine = input.shift();
    }
    console.log(targets.join(' - '));
}

archeryChampion(["10|10|10|10|10",
    "Shoot Left@0@2",
    "Shoot Right@4@5",
    "Shoot Right@6@5",
    "Reverse",
    "Game over"]);
