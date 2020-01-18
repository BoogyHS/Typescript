"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _2_Qualification_1 = require("./2.Qualification");
var Race = /** @class */ (function (_super) {
    __extends(Race, _super);
    // racePositions: QualiData[];
    function Race(raceName) {
        var _this = _super.call(this) || this;
        _this.raceName = raceName;
        return _this;
        // this.racePositions = [];
    }
    Race.prototype.overtake = function (overtakerID, otherId) {
        var overtaker = this.finalPositions.find(function (x) { return x.id === overtakerID; });
        var other = this.finalPositions.find(function (x) { return x.id === otherId; });
        if (overtaker && other) {
            if (overtaker.position && other.position) {
                var isSubsequent = overtaker.position === other.position - 1;
                var otherIslast = other.position === this.finalPositions.length;
                var overtakerIsLast = overtaker.position === 1;
                if (isSubsequent || otherIslast || overtakerIsLast) {
                    throw new Error('This overtake is not possible');
                }
                overtaker.position = other.position;
                other.position += 1;
                this.finalPositions.sort(function (a, b) {
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
        var first = this.finalPositions[0];
        var firstId = first.id;
        var winner = this.allRacers.find(function (x) { return x.id === firstId; });
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
        var _this = this;
        var output = [];
        output.push("Here is your top three:");
        var topThreeArr = this.finalPositions.slice(0, 3);
        topThreeArr.forEach(function (el) {
            var racerNames = _this.allRacers.find(function (x) { return x.id === el.id; });
            if (racerNames) {
                var racer = el.position + ". " + racerNames.firstName + " " + racerNames.lastName;
                output.push(racer);
            }
        });
        output.push('And the rest of the grid is as follows:');
        var others = this.finalPositions.slice(3);
        others.forEach(function (el) {
            var racerNames = _this.allRacers.find(function (x) { return x.id === el.id; });
            if (racerNames) {
                var racer = el.position + ". " + racerNames.firstName + " " + racerNames.lastName;
                output.push(racer);
            }
        });
        return output.join('\n');
    };
    return Race;
}(_2_Qualification_1.Quali));
var sepang = new Race('Sepang');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5SYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjLzMuUmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQSxzREFBMEM7QUFFMUM7SUFBbUIsd0JBQUs7SUFDcEIsOEJBQThCO0lBRTlCLGNBQW9CLFFBQWdCO1FBQXBDLFlBQ0ksaUJBQU8sU0FFVjtRQUhtQixjQUFRLEdBQVIsUUFBUSxDQUFROztRQUVoQywyQkFBMkI7SUFDL0IsQ0FBQztJQUVELHVCQUFRLEdBQVIsVUFBUyxXQUFtQixFQUFFLE9BQWU7UUFDekMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLFdBQVcsRUFBcEIsQ0FBb0IsQ0FBRSxDQUFDO1FBQ3hFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFNLE9BQU8sQ0FBQyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV6RSxJQUFJLFNBQVMsSUFBSSxLQUFLLEVBQUU7WUFDcEIsSUFBSSxTQUFTLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RDLElBQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBQy9ELElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7Z0JBQ2xFLElBQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDO2dCQUVqRCxJQUFJLFlBQVksSUFBSSxXQUFXLElBQUksZUFBZSxFQUFFO29CQUNoRCxNQUFNLElBQUksS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7aUJBRXBEO2dC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QWUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBSTlELE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzVCLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzVCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzNCLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRTVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFFaEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDeEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDdkIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDdkIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDdkIsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMifQ==