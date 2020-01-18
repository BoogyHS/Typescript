import { QualiData } from './interfaces';
import { Racers } from './1.Racers';
import { Quali } from './2.Qualification';

class Race extends Quali{
    // racePositions: QualiData[];

    constructor(private raceName: string) {
        super();
        // this.racePositions = [];
    }

    overtake(overtakerID: number, otherId: number) {
        const overtaker = this.finalPositions.find(x =>  x.id === overtakerID );
        const other = this.finalPositions.find(x => { return x.id === otherId });

        if (overtaker && other) {
            if (overtaker.position && other.position) {
                const isSubsequent = overtaker.position === other.position - 1;
                const otherIslast = other.position === this.finalPositions.length;
                const overtakerIsLast = overtaker.position === 1;

                if (isSubsequent || otherIslast || overtakerIsLast) {
                    throw new Error('This overtake is not possible');

                }
                overtaker.position = other.position;
                other.position += 1;

                this.finalPositions.sort(
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
        const first = this.finalPositions[0];
        const firstId = first.id;
        const winner = this.allRacers.find(x => { return x.id === firstId });
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

        const topThreeArr = this.finalPositions.slice(0, 3);
        topThreeArr.forEach(el => {
            const racerNames = this.allRacers.find(x => { return x.id === el.id });
            if (racerNames) {
                const racer = `${el.position}. ${racerNames.firstName} ${racerNames.lastName}`;
                output.push(racer);
            }
        });
        output.push('And the rest of the grid is as follows:');

        const others = this.finalPositions.slice(3);
        others.forEach(el => {
            const racerNames = this.allRacers.find(x => { return x.id === el.id });
            if (racerNames) {
                const racer = `${el.position}. ${racerNames.firstName} ${racerNames.lastName}`;
                output.push(racer);
            }
        });

        return output.join('\n');
    }
}
let sepang = new Race('Sepang');

sepang.createRacer('Lewis', 'Hamilton', '11.12.1988', 44);
sepang.signContract(44, 'Mercedes', 10000000, 4);

sepang.createRacer('Sebastian', 'Vettel', '11.11.1986', 5);
sepang.signContract(5, 'Ferrari', 4899990, 2);

sepang.createRacer('Valteri', 'Bottas', '11.11.1986', 22);
sepang.signContract(22, 'Mercedes', 900000, 2);

sepang.createRacer('Max', 'Verstappen', '11.11.1986', 33);
console.log(sepang.signContract(33, 'Redbull', 900100, 3));
console.log(sepang.renewContract(33, 98765, 4));
console.log(sepang.signWithNewTeam(5, 'Redbull', 1234567, 2));



sepang.fastestLap(22, 1.24);
sepang.fastestLap(44, 1.22);
sepang.fastestLap(5, 1.25);
sepang.fastestLap(33, 1.23);

console.log(sepang.standings());

sepang.overtake(22, 33);
sepang.overtake(5, 33);
sepang.overtake(5, 22);
sepang.overtake(22, 5);
sepang.overtake(5, 22);
sepang.winRace();
console.log(sepang.showStandings());
