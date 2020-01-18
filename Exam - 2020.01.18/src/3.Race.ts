import { QualiData } from './interfaces';
import { Racers } from './1.Racers';
import { Quali } from './2.Qualification';

class Race {
    racePositions: QualiData[];

    constructor(private raceName: string) {
        this.racePositions = Quali.finalPositions.slice(0);
    }

    overtake(overtakerID: number, otherId: number) {
        const overtaker = this.racePositions.find(x => { return x.id === overtakerID });
        const other = this.racePositions.find(x => { return x.id === otherId });

        if (overtaker && other) {
            if (overtaker.position && other.position) {
                const isSubsequent = overtaker.position === other.position - 1;
                const otherIslast = other.position === this.racePositions.length;
                const overtakerIsLast = overtaker.position === 1;

                if (isSubsequent || otherIslast || overtakerIsLast) {
                    throw new Error('This overtake is not possible');

                }
                overtaker.position = other.position;
                other.position += 1;

                this.racePositions.sort(
                    (a: QualiData, b: QualiData) => {
                        if (a.position && b.position) {
                            return a.position - b.position
                        }
                        return 0;
                    })


                return `${overtakerID} successfully overtook ${otherId}`;

            }
        } else {
            throw new Error(`There are no such racers in the race`);
        }
    }

    winRace() {
        const first = this.racePositions[0];
        const firstId = first.id;
        const winner = Racers.allRacers.find(x => { return x.id === firstId });
        if (winner) {
            if (!winner.wonRaces) {
                winner.wonRaces = 1;
            } else {
                winner.wonRaces += 1;
            }
            return `The winner of the ${this.raceName} race is ${winner.firstName} ${winner.lastName}`;
        }
    }

    showStandings(): string {
        const output: string[] = [];
        output.push(`Here is your top three:`);

        const topThreeArr = this.racePositions.slice(0, 3);
        topThreeArr.forEach(el => {
            const racerNames = Racers.allRacers.find(x => { return x.id === el.id });
            if (racerNames) {
                const racer = `${el.position}. ${racerNames.firstName} ${racerNames.lastName}`;
                output.push(racer);
            }
        });
        output.push('And the rest of the grid is as follows:');

        const others = this.racePositions.slice(3);
        others.forEach(el => {
            const racerNames = Racers.allRacers.find(x => { return x.id === el.id });
            if (racerNames) {
                const racer = `${el.position}. ${racerNames.firstName} ${racerNames.lastName}`;
                output.push(racer);
            }
        });

        return output.join('\n');
    }
}

let race = new Race('Sepang');

race.overtake(22, 33);
race.overtake(5, 33);
race.overtake(5, 22);
race.overtake(22, 5);
race.overtake(5, 22);
race.winRace();
console.log(race.showStandings());
