function login(input) {

    let user = input[0];
    let try1 = input[1];
    let try2 = input[2];
    let try3 = input[3];
    let try4 = input[4];
    let buffPassword = '';
    let countTry = 0;

    for (let i = user.length - 1; i >= 0; i--) {
        buffPassword += user[i];
    }

    for (let j = 1; j <= input.length - 1; j++) {
        let currentPass = input[j];
        countTry++;

        if (currentPass != buffPassword && countTry < 4) {
            console.log('Incorrect password. Try again.'); continue;
        } else if (currentPass != buffPassword && countTry === 4) {
            console.log(`User ${user} blocked!`); continue;
        } else {
            console.log(`User ${user} logged in.`); continue;
        }
        

    }

}

login(['momo','omom']);