import { QualiData } from './interfaces';
import { Racers } from './1.Racers';

export class Quali {

    times: QualiData[];
    static finalPositions: QualiData[];

    constructor() {
        this.times = [];
        Quali.finalPositions = [];
    }

    fastestLap(id: number, lapTime: number) {

        const found = Racers.allRacers.find(x => { return x.id === id && x.racingTeam !== undefined });

        if (!found) {
            throw new Error(`There is no such racer on the grid or has no contract with a team`);
        }

        this.times.push({ id, lapTime });
        if (this.times.length > 1) {
            this.times.sort((a: QualiData, b: QualiData) => {
                if (a.lapTime && b.lapTime) {
                    return a.lapTime - b.lapTime
                }
                return 0;
            })
        }
    }

    standings() {
        this.times.forEach((el, index) => {
            el.position = index + 1;
            Quali.finalPositions.push(el);
        });
        const fastestId = this.times[0].id;
        const fastest = Racers.allRacers.find(x => { return x.id === fastestId });
        if (fastest) {
            return `The fastest driver was ${fastest.firstName} ${fastest.lastName} with car ${fastestId}!`;
        }
    }
}

export let q = new Quali();

q.fastestLap(22, 1.24);
q.fastestLap(44, 1.22);
q.fastestLap(5, 1.25);
q.fastestLap(33, 1.23);

console.log(q.standings());