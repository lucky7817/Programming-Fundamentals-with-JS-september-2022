function scheduleMeetings(array) {

    const meetengs = {};

    for (const entry of array) {
        let [day, name] = entry.split(' ');

        if(meetengs[day]) {
            console.log(`Conflict on ${day}!`);
        } else {    
            meetengs[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const [day, name] of Object.entries(meetengs)) {
        console.log(`${day} -> ${name}`);
        
    }
}

scheduleMeetings(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim']);