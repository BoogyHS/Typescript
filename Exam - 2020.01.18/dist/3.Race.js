"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1_Racers_1 = require("./1.Racers");
var _2_Qualification_1 = require("./2.Qualification");
var Race = /** @class */ (function () {
    function Race(raceName) {
        this.raceName = raceName;
        this.racePositions = _2_Qualification_1.Quali.finalPositions.slice(0);
    }
    Race.prototype.overtake = function (overtakerID, otherId) {
        var overtaker = this.racePositions.find(function (x) { return x.id === overtakerID; });
        var other = this.racePositions.find(function (x) { return x.id === otherId; });
        if (overtaker && other) {
            if (overtaker.position && other.position) {
                var isSubsequent = overtaker.position === other.position - 1;
                var otherIslast = other.position === this.racePositions.length;
                var overtakerIsLast = overtaker.position === 1;
                if (isSubsequent || otherIslast || overtakerIsLast) {
                    throw new Error('This overtake is not possible');
                }
                overtaker.position = other.position;
                other.position += 1;
                this.racePositions.sort(function (a, b) {
                    if (a.position && b.position) {
                        return a.position - b.position;
                    }
                    return 0;
                });
                return overtakerID + " successfully overtook " + otherId;
            }
        }
        else {
            throw new Error("There are no such racers in the race");
        }
    };
    Race.prototype.winRace = function () {
        var first = this.racePositions[0];
        var firstId = first.id;
        var winner = _1_Racers_1.Racers.allRacers.find(function (x) { return x.id === firstId; });
        if (winner) {
            if (!winner.wonRaces) {
                winner.wonRaces = 1;
            }
            else {
                winner.wonRaces += 1;
            }
            return "The winner of the " + this.raceName + " race is " + winner.firstName + " " + winner.lastName;
        }
    };
    Race.prototype.showStandings = function () {
        var output = [];
        output.push("Here is your top three:");
        var topThreeArr = this.racePositions.slice(0, 3);
        topThreeArr.forEach(function (el) {
            var racerNames = _1_Racers_1.Racers.allRacers.find(function (x) { return x.id === el.id; });
            if (racerNames) {
                var racer = el.position + ". " + racerNames.firstName + " " + racerNames.lastName;
                output.push(racer);
            }
        });
        output.push('And the rest of the grid is as follows:');
        var others = this.racePositions.slice(3);
        others.forEach(function (el) {
            var racerNames = _1_Racers_1.Racers.allRacers.find(function (x) { return x.id === el.id; });
            if (racerNames) {
                var racer = el.position + ". " + racerNames.firstName + " " + racerNames.lastName;
                output.push(racer);
            }
        });
        return output.join('\n');
    };
    return Race;
}());
var race = new Race('Sepang');
race.overtake(22, 33);
race.overtake(5, 33);
race.overtake(5, 22);
race.overtake(22, 5);
race.overtake(5, 22);
race.winRace();
console.log(race.showStandings());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5SYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjLzMuUmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHdDQUFvQztBQUNwQyxzREFBMEM7QUFFMUM7SUFHSSxjQUFvQixRQUFnQjtRQUFoQixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsd0JBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCx1QkFBUSxHQUFSLFVBQVMsV0FBbUIsRUFBRSxPQUFlO1FBQ3pDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFNLE9BQU8sQ0FBQyxDQUFDLEVBQUUsS0FBSyxXQUFXLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBTSxPQUFPLENBQUMsQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEUsSUFBSSxTQUFTLElBQUksS0FBSyxFQUFFO1lBQ3BCLElBQUksU0FBUyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO2dCQUN0QyxJQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUMvRCxJQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO2dCQUNqRSxJQUFNLGVBQWUsR0FBRyxTQUFTLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQztnQkFFakQsSUFBSSxZQUFZLElBQUksV0FBVyxJQUFJLGVBQWUsRUFBRTtvQkFDaEQsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxD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