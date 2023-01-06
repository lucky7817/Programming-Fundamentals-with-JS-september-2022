function towns(array) {

    let townsInfo = {};
    
    array.forEach(infoLine => {
        // let splitedInfo = infoTown.split(' | ');
        // let town = splitedInfo[0];
        // let latitude = Number(splitedInfo[1]).toFixed(2);
        // let longitude = Number(splitedInfo[2]);

        let [town, latitude, longitude] = infoLine.split(' | ');

        townsInfo.town = town;
        townsInfo.latitude = Number(latitude).toFixed(2);
        townsInfo.longitude = Number(longitude).toFixed(2);

        console.log(townsInfo);
 
    });

}

towns(['Sofia | 42.696552 | 23.32601',

    'Beijing | 39.913818 | 116.363625']);