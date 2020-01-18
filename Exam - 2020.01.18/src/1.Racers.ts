import { Racer } from "./interfaces"

export class Racers {

    static allRacers: Racer[];

    constructor() {
        Racers.allRacers = [];
    }

    createRacer(firstName: string, lastName: string, dateOfBirth: string, id: number): void {

        const found = Racers.allRacers.find(x => { return x.firstName === firstName && x.lastName === lastName });

        if (found) {
            throw new Error(`${firstName} ${lastName} already exists on the grid`);
        }
        if (Racers.allRacers.length > 20) {
            throw new Error('You have exceeded the maximum number of racers on the grid');
        }
        const newRacer: Racer = {
            firstName,
            lastName,
            dateOfBirth,
            id
        }
        Racers.allRacers.push(newRacer);
    }

    signContract(id: number, racingTeam: string, salary: number, terms: number) {

        const found = Racers.allRacers.find(x => {  return x.id === id });

        if (!found) {
            throw new Error('There is not such racer on the grid');
        }
        found.hasContract = true;
        found.racingTeam = racingTeam;
        found.salary = salary;
        found.terms = terms;

        return `${found.firstName} ${found.lastName} has just signed a contract with ${racingTeam} for ${terms} years`
    }

    renewContract(id: number, salary: number, terms: number): string {

        const found = Racers.allRacers.find(x => { return x.id === id });

        if (!found) {
            throw new Error('There is no racer who meets the criteria');
        }

        found.salary = salary;
        found.terms = terms;

        return `${found.firstName} ${found.lastName} has renewed his contract with ${found.racingTeam} for ${terms} years.`
    }

    signWithNewTeam(id: number, racingTeam: string, salary: number, terms: number) {

        const found = Racers.allRacers.find(x => { return x.id === id });
        if (!found || (found && found.racingTeam === racingTeam)) {
            throw new Error('There is no racer who meets the criteria or he is currently in the same team');
        }
        found.racingTeam = racingTeam;
        found.salary = salary;
        found.terms = terms;

        return `${found.firstName} ${found.lastName} has renewed his contract with his new team -${racingTeam} for ${terms} years.`;
    }
}

 export let racers = new Racers();

racers.createRacer('Lewis', 'Hamilton', '11.12.1988', 44);
racers.signContract(44, 'Mercedes', 10000000, 4);

racers.createRacer('Sebastian', 'Vettel', '11.11.1986', 5);
racers.signContract(5, 'Ferrari', 4899990, 2);

racers.createRacer('Valteri', 'Bottas', '11.11.1986', 22);
racers.signContract(22, 'Mercedes', 900000, 2);

racers.createRacer('Max', 'Verstappen', '11.11.1986', 33);
console.log(racers.signContract(33, 'Redbull', 900100, 3));
console.log(racers.renewContract(33, 98765, 4));
console.log(racers.signWithNewTeam(5, 'Redbull', 1234567, 2));
