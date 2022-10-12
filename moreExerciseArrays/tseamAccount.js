function tseamAccount(array) {

    let buff1 = '';
    let buff2 = '';
    let buff3 = '';


    let peterAccount = array[0];
    for(let i = 0; i < peterAccount.length; i++) {
        let currentWord = peterAccount[i];
        buff1 = peterAccount[0] + peterAccount[1];
        buff2 = peterAccount[3] + peterAccount[4] + peterAccount[5];
        buff3 = peterAccount[7] + peterAccount[8] + peterAccount[9] + peterAccount[10] + peterAccount[11] +peterAccount[12];
        
    }
    console.log(buff1 + ' ' + buff2 + ' ' + buff3);

}

tseamAccount(['CS WoW Diablo',

'Install LoL',

'Uninstall WoW',

'Update Diablo',

'Expansion CS-Go',

'Play!'])