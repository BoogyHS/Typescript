interface IDealership<K> {
    dealershipName: K,
    soldCars: number
}

interface IActions<T> {
    // dealerID: T,
    // model: T,
    sellCar<T>(dealerID: string, model: T): void
}
class CarDealer<T, K> implements IActions<T>, IDealership<K>{
    public modelsSold: { [key: string]: any } = {}
    constructor(public dealershipName: K, public soldCars: number = 0, ) {
    }
    sellCar<T extends {}>(dealerID: string, model: T): void {
        this.soldCars += 1;
        this.modelsSold[dealerID] = model;
    }
    showDetails() {
        const printArr: string[] = []
        for (const prop in this.modelsSold) {
            printArr.push(`${prop} sold ${this.modelsSold[prop]}`)
        }
        return `${this.dealershipName}:\n${printArr.join("\n")}`;
    }
}

let dealership = new CarDealer('SilverStar');

dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());