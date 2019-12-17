interface IRacing {
    createRacer(name: string, fuel: number, position: number): object,
    consumeFuel(usedFuel: number, name: string): void,
    overtake(gained: string, lost: string): string | void
}
class Circuit implements IRacing {
    constructor(public racers: { 'name': string, 'fuel': number, 'position': number, [key: string]: any }[] = []) {
    }
    createRacer(name: string, fuel: number, position: number) {
        this.racers.push({ name, fuel, position });
        return { name: name, fuel, position };
    }
    consumeFuel(usedFuel: number, name: string): void {
        const racer = this.racers.filter(x => x.name === name)[0];
        racer.fuel = racer.fuel - usedFuel;
        if (racer.fuel <= 0) {
            racer.isDNF = true;
        }
    }
    overtake(gained: string, lost: string): string | void {
        const overLoader = this.racers.findIndex(x => x.name === gained);
        const overLoaded = this.racers.findIndex(x => x.name === lost);
        if (overLoaded !== -1 && overLoader !== -1 && overLoaded === this.racers.length) {
            return console.log(`${overLoaded} is on the back of the grid!`);
        } else if (overLoaded !== -1 && overLoader !== -1 && overLoaded > overLoader) {
            const replacer = this.racers.slice(overLoader, overLoader + 1);
            this.racers.splice(overLoader, 1);
            this.racers.splice(overLoaded - 1, 1, ...replacer);
        }
    }
    showPositions() {
        const filtered = this.racers.filter(x => !x.hasOwnProperty('isDFN'));
        filtered.map((x, index) => {
            return `${x.name} finished on ${index+1} position with ${x.fuel} l remaining`;
        })
            .forEach(el => console.log(el))
    }
}
let c = new Circuit();
c.createRacer('Pesho', 5, 1);
c.consumeFuel(1, 'Pesho');
c.showPositions();