function softUniReception(input) {

    let studendsNumber = Number(input.pop());
    let totalStudentsPerHour = 0;
    let counter = 0;
    let totalCounter = 0
    
    for (let i = 0; i < input.length; i++) {

        let currentStudents = Number(input[i]);

        totalStudentsPerHour += currentStudents;     
    }

    while (studendsNumber > 0) {
        
        totalCounter++;
        counter++;

        if (counter <= 3) {
            studendsNumber -= totalStudentsPerHour;
        } else if (counter === 4) {
            counter = 0;
        }
    }
    console.log(`Time needed: ${Math.ceil(totalCounter)}h.`);
}

//softUniReception(['1','2','3','45']);
//softUniReception(['5','6','4','20']);
softUniReception(['3','2','5','40']);
