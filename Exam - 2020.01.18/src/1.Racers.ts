import { Racer } from "./interfaces"

export class Racers {

    allRacers: Racer[];

    constructor() {
        this.allRacers = [];
    }

    createRacer(firstName: string, lastName: string, dateOfBirth: string, id: number): void {

        const found = this.allRacers.find(x => { return x.firstName === firstName && x.lastName === lastName });

        if (found) {
            throw new Error(`${firstName} ${lastName} already exists on the grid`);
        }
        if (this.allRacers.length > 20) {
            throw new Error('You have exceeded the maximum number of racers on the grid');
        }
        const newRacer: Racer = {
            firstName,
            lastName,
            dateOfBirth,
            id
        }
        this.allRacers.push(newRacer);
    }

    signContract(id: number, racingTeam: string, salary: number, terms: number) {

        const found = this.allRacers.find(x => {  return x.id === id });

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

        const found = this.allRacers.find(x => { return x.id === id });

        if (!found) {
            throw new Error('There is no racer who meets the criteria');
        }

        found.salary = salary;
        found.terms = terms;

        return `${found.firstName} ${found.lastName} has renewed his contract with ${found.racingTeam} for ${terms} years.`
    }

    signWithNewTeam(id: number, racingTeam: string, salary: number, terms: number) {

        const found = this.allRacers.find(x => { return x.id === id });
        if (!found || (found && found.racingTeam === racingTeam)) {
            throw new Error('There is no racer who meets the criteria or he is currently in the same team');
        }
        found.racingTeam = racingTeam;
        found.salary = salary;
        found.terms = terms;

        return `${found.firstName} ${found.lastName} has renewed his contract with his new team -${racingTeam} for ${terms} years.`;
    }
}
