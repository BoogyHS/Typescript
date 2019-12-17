abstract class Activities {
    abstract parkVehicle(plate: string): void;
    abstract payForStay(hours: number, rate: number, plate: string): void;
    abstract leaveTheParking(plate: string): void;
}

type ParkedVehicle = { plate: string, didPay: boolean };

class ParkingLot extends Activities {
    public revenue: number;
    public parkedVehicles: ParkedVehicle[];
    constructor(public capacity: number) {
        super();
        this.parkedVehicles = [];
        this.revenue = 0;
    }

    parkVehicle(plate: string) {
        if (this.capacity > this.parkedVehicles.length) {
            return this.parkedVehicles.push({ plate, didPay: false });
        }
        throw new Error('No more available spaces in the parking lot!');
    }

    payForStay(hours: number, rate: number, plate: string) {
        const x = this.parkedVehicles.find(x =>  x.plate === plate )
        if (x) {
            this.revenue += hours * rate;
            x.didPay = true;
            return;
        }
        throw new Error('There is no such vehicle parked in the parking lot!')
    }

    leaveTheParking(plate: string) {
        const x = this.parkedVehicles.find(x =>  x.plate === plate );
        if (x && x.didPay === true) {
            this.parkedVehicles = this.parkedVehicles.filter(x =>  x.plate !== plate );
        }
    }

    overview() {
        return `The current revenue of the parking lot is ${this.revenue} and ${this.parkedVehicles.map(el=>el.plate).join(', ')} are parked!`;
    }
}

let p = new ParkingLot(5);
p.parkVehicle('CA1111CA');
p.parkVehicle('CA2222CA');
p.parkVehicle('CA3333CA');
p.parkVehicle('CA4444CA');
p.parkVehicle('CA5555CA');

p.payForStay(4, 2, 'CA1111CA');
p.payForStay(2, 2, 'CA2222CA');
p.payForStay(7, 2, 'CA4444CA');

p.leaveTheParking('CA1111CA');
p.leaveTheParking('CA4444CA');

console.log(p.overview());
