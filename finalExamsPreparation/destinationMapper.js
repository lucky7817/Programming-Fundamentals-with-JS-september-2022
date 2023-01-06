function destinationMapper(input) {

    let placeName = '';
    let placeNameOrigin = '';
    let allPlaceNameStorage = [];
    let travelPoints = 0;
    let places = input.matchAll(/(={1}|\/{1})(?<places>[A-Z]{1}[A-Za-z]{2,})\1/g);
    
    for (const place of places) {
        placeNameOrigin = place[0];
        placeName = place.groups.places;

        allPlaceNameStorage.push(placeName);

        travelPoints += placeName.length;    
    }

    console.log(`Destinations: ${allPlaceNameStorage.join(', ')}` );
    console.log(`Travel Points: ${travelPoints}`);  
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper('ThisIs some InvalidInput');