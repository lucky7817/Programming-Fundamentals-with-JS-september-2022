class Laptop {
    constructor(info, isOn, quality, price ) {
        this.info = info;
        this.info.producer = '';
        this.info.age = 0;
        this.info.brand = '';
        this.isOn = isOn;
        this.showInfo = JSON.stringify(info);
        this.quality = 0;
        this.price = Number(800 - (age * 2 )+ (quality * 0.5));
    }

    turnOn(isOnToBeTrue) {
        this.isOn = isOnToBeTrue;
    }

    turnOff(setsTurnOnToFalse) {
        this.isOn = setsTurnOnToFalse;
    }

    showInfo(returnsInfoToJson) {
        JSON.stringify(returnsInfoToJson);
        JSON.stringify(returnsInfoToJson);
        JSON.stringify(returnsInfoToJson);

    }

}

let info = {
    producer: "Dell",
    age: 2, brand: "XPS"
}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)