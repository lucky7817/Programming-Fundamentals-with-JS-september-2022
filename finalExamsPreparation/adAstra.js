function adAstra(input) {

    let pattern = /([|]{1}|[#]{1})(?<item>[A-Za-z ]+)\1(?<date>[\d]{2}\/[\d]{2}\/[\d]{2})\1(?<calories>[\d]+)\1/g;
    let foodInfo = input[0].matchAll(pattern);
    let totalCalories = 0;
    let daysCount = 0;
    let foodLine = [];

    for (const food of foodInfo) {
        let itemName = food.groups.item;
        let expirationDate = food.groups.date
        let caloriesValue = Number(food.groups.calories);

        let currentLine = `Item: ${itemName}, Best before: ${expirationDate}, Nutrition: ${caloriesValue}`;
        foodLine.push(currentLine);

        totalCalories += caloriesValue;
        daysCount = Math.floor(totalCalories / 2000);
    }
    console.log(`You have food to last you for: ${daysCount} days!`);

    for (const food of foodLine) {
        let splitedFood = food.split(', ')
        console.log(splitedFood.join(', ')); 
    }
}

// adAstra([
//     '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
// ]);
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
//adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);