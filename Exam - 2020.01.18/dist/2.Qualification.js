"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1_Racers_1 = require("./1.Racers");
var Quali = /** @class */ (function () {
    function Quali() {
        this.times = [];
        Quali.finalPositions = [];
    }
    Quali.prototype.fastestLap = function (id, lapTime) {
        var found = _1_Racers_1.Racers.allRacers.find(function (x) { return x.id === id && x.racingTeam !== undefined; });
        if (!found) {
            throw new Error("There is no such racer on the grid or has no contract with a team");
        }
        this.times.push({ id: id, lapTime: lapTime });
        if (this.times.length > 1) {
            this.times.sort(function (a, b) {
                if (a.lapTime && b.lapTime) {
                    return a.lapTime - b.lapTime;
                }
                return 0;
            });
        }
    };
    Quali.prototype.standings = function () {
        this.times.forEach(function (el, index) {
            el.position = index + 1;
            Quali.finalPositions.push(el);
        });
        var fastestId = this.times[0].id;
        var fastest = _1_Racers_1.Racers.allRacers.find(function (x) { return x.id === fastestId; });
        if (fastest) {
            return "The fastest driver was " + fastest.firstName + " " + fastest.lastName + " with car " + fastestId + "!";
        }
    };
    return Quali;
}());
exports.Quali = Quali;
exports.q = new Quali();
exports.q.fastestLap(22, 1.24);
exports.q.fastestLap(44, 1.22);
exports.q.fastestLap(5, 1.25);
exports.q.fastestLap(33, 1.23);
console.log(exports.q.standings());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5RdWFsaWZpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjLzIuUXVhbGlmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHdDQUFvQztBQUVwQztJQUtJO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsS0FBSyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELDBCQUFVLEdBQVYsVUFBVyxFQUFVLEVBQUUsT0FBZTtRQUVsQyxJQUFNLEtBQUssR0FBRyxrQkFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQU0sT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRS9GLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixNQUFNLElBQUksS0FBSyxDQUFDLG1FQUFtRSxDQUFDLENBQUM7U0FDeEY7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQVksRUFBRSxDQUFZO2dCQUN2QyxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRTtvQkFDeEIsT0FBTyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUE7aUJBQy9CO2dCQUNELE9BQU8sQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLENBQUE7U0FDTDtJQUNMLENBQUM7SUFFRCx5QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFLEVBQUUsS0FBSztZQUN6QixFQUFFLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDeEIsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNuQyxJQUFNLE9BQU8sR0FBRyxrQkFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQU0sT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLFNBQVMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLElBQUksT0FBTyxFQUFFO1lBQ1QsT0FBTyw0QkFBMEIsT0FBTyxDQUFDLFNBQVMsU0FBSSxPQUFPLENBQUMsUUFBUSxrQkFBYSxTQUFTLE1BQUcsQ0FBQztTQUNuRztJQUNMLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQztBQXhDWSxzQkFBSztBQTBDUCxRQUFBLENBQUMsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0FBRTNCLFNBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLFNBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLFNBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3RCLFNBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRXZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMifQ==