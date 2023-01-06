function listSchoolGrades(array) {

    let schoolGrades = {};
    let sumGrades = 0;
    let counter = 0;
    let averagGrade = 0;
    let grades = '';

    for (const iterator of array) {
        let splitedArray = iterator.split(' ')

        let studentName = splitedArray[0];

        for (let i = 1; i < splitedArray.length; i++) {

            grades += splitedArray[i] + ', ';
        }

        if (schoolGrades.hasOwnProperty(studentName)) {
            schoolGrades[studentName] += grades;

        } else {
            schoolGrades[studentName] = grades;
        }
        grades = '';
    }

    let schoolGradesArr = Object.entries(schoolGrades);


    for (const line of schoolGradesArr) {
        
        let name = line.shift();

        for (const num of line) {
            let splitedNum = num.split(', ');

            for (let h = 0; h < splitedNum.length; h++) {
                let currentNums = Number(splitedNum[h]);
                counter++;
                sumGrades += currentNums;

            }
            averagGrade = sumGrades / (counter - 1);

            schoolGrades[name] = averagGrade;
            counter = 0;
            sumGrades = 0;
            averagGrade = 0;
        }
    }

    let schoolGradesToArr = Object.entries(schoolGrades);
    schoolGradesToArr.sort((a, b) => a[0].localeCompare(b[0]));

    let schoolGradesToArrInObj = Object.fromEntries(schoolGradesToArr);

    for (const key in schoolGradesToArrInObj) {
        console.log(`${key}: ${(schoolGradesToArrInObj[key]).toFixed(2)} `);
    }
}

listSchoolGrades(['Lilly 4 6 6 5',

    'Tim 5 6',

    'Tim 6 6',

    'Tammy 2 4 3',

]);