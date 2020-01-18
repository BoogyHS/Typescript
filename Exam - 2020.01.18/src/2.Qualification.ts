import { QualiData } from './interfaces';
import { Racers } from './1.Racers';

export class Quali extends Racers{

    times: QualiData[];
    finalPositions: QualiData[];

    constructor() {
        super();
        this.times = [];
        this.finalPositions = [];
    }

    fastestLap(id: number, lapTime: number) {

        const found = this.allRacers.find(x => { return x.id === id && x.racingTeam !== undefined });

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
            this.finalPositions.push(el);
        });
        const fastestId = this.times[0].id;
        const fastest = this.allRacers.find(x => { return x.id === fastestId });
        if (fastest) {
            return `The fastest driver was ${fastest.firstName} ${fastest.lastName} with car ${fastestId}!`;
        }
    }
}