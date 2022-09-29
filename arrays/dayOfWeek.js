function dayOfWeek(day) {

    let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let myDay = 0;

    for (let i = 0; i < weekDays.length; i++) {

        if (day - 1 === i) {
            myDay = weekDays[i];
            console.log(myDay); break;
        } else if (day - 1 > weekDays.length - 1 || day - 1 <= 0) {
            console.log('Invalid day!'); break;
        }   
        continue;
    }
    
}

dayOfWeek(3)