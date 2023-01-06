function bonusScoringSystem(input) {

    let numberOfLinesStudents = Number(input.shift());
    let numberOfLectures = Number(input.shift());
    let additionalBonus = Number(input.shift());
    let totalBonus = 0;
    let allTotalBonusesArr = [];
    let maxAttendance = 0;

    for (let i = 0; i < input.length; i++) {
        let currentStudentAttendance = Number(input[i]);

        if (currentStudentAttendance > maxAttendance) {
            maxAttendance = currentStudentAttendance;
        }

        totalBonus = (currentStudentAttendance / numberOfLectures) * (5 + additionalBonus);
        allTotalBonusesArr.push(totalBonus);
    }
    let maxTotalBonus = Math.max(...allTotalBonusesArr);

    console.log(`Max Bonus: ${Math.ceil(maxTotalBonus)}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`);
}

// bonusScoringSystem([
//     '5', '25', '30',
//     '12', '19', '24',
//     '16', '20'
// ]);
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]);
