function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let totalExpenses = 0;

    for (let i = 2; i <= lostFights; i += 2) {

        totalExpenses += helmetPrice;  
    }

    for (let j = 3; j <= lostFights; j += 3) {

        totalExpenses += swordPrice;
    }

    for (let g = 6; g <= lostFights; g += 6) {

        totalExpenses += shieldPrice;
    }

    for (let h = 12; h <= lostFights; h += 12) {

        totalExpenses += armorPrice;
    }

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
    
    

}

//gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);