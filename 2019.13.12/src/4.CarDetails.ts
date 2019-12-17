interface ICar {
    model: string,
    weight?: number,
    color?: string

}
interface IEngine {
    model: string,
    power: number,
    displacement?: number,
    efficiency?: string
}
class Car implements ICar {
    constructor(
        public model: string,
        public weight?: number,
        public color?: string) {
    }
}
class Engine implements IEngine {
    constructor(
        public model: string,
        public power: number,
        public displacement?: number,
        public efficiency?: string) {
    }
}
class Details {
    constructor(public Car: Car, public Engine: Engine) {
    }
    print() {
        if (!this.Car.model || !this.Car.color || !this.Engine.displacement || !this.Engine.efficiency) {
            return `Vehicle model: ${this.Car.model}
            Engine model: ${this.Engine.model}
                Power: ${this.Engine.power}`;
        }
        return `Vehicle model: ${this.Car.model}
        Engine model: ${this.Engine.model}
            Power: ${this.Engine.power}
            Displacement: ${this.Engine.displacement}
            Efficiency: ${this.Engine.efficiency}
        Weight: ${this.Car.weight}
        Color: ${this.Car.color}`;
    }
}
let s = new Details(new Car('C class', 3982, 'red'), new Engine('MB177', 510, 3982, 'A'));
console.log(s.print());
