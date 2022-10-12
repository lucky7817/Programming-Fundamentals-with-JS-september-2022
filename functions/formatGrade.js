function formatGrade(grade) {

    let discriptionOfGrade = '';

    if (grade >= 2 && grade < 3) {
        discriptionOfGrade = 'Fail';
        grade = 2;
        console.log(`${discriptionOfGrade} (${grade})`); return;
    } else if (grade < 3.50) {
        discriptionOfGrade = 'Poor';
    } else if (grade < 4.50) {
        discriptionOfGrade = 'Good';
    } else if (grade < 5.50) {
        discriptionOfGrade = 'Very good'
    } else if (grade <= 6 && grade >= 5.50) {
        discriptionOfGrade = 'Excellent';
    }

    
    console.log(`${discriptionOfGrade} (${grade.toFixed(2)})`);

}

formatGrade(2.99);