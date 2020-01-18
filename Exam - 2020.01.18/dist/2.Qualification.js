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
var _1_Racers_1 = require("./1.Racers");
var Quali = /** @class */ (function (_super) {
    __extends(Quali, _super);
    function Quali() {
        var _this = _super.call(this) || this;
        _this.times = [];
        _this.finalPositions = [];
        return _this;
    }
    Quali.prototype.fastestLap = function (id, lapTime) {
        var found = this.allRacers.find(function (x) { return x.id === id && x.racingTeam !== undefined; });
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
        var _this = this;
        this.times.forEach(function (el, index) {
            el.position = index + 1;
            _this.finalPositions.push(el);
        });
        var fastestId = this.times[0].id;
        var fastest = this.allRacers.find(function (x) { return x.id === fastestId; });
        if (fastest) {
            return "The fastest driver was " + fastest.firstName + " " + fastest.lastName + " with car " + fastestId + "!";
        }
    };
    return Quali;
}(_1_Racers_1.Racers));
exports.Quali = Quali;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5RdWFsaWZpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjLzIuUXVhbGlmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSx3Q0FBb0M7QUFFcEM7SUFBMkIseUJBQU07SUFLN0I7UUFBQSxZQUNJLGlCQUFPLFNBR1Y7UUFGRyxLQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQzs7SUFDN0IsQ0FBQztJQUVELDBCQUFVLEdBQVYsVUFBVyxFQUFVLEVBQUUsT0FBZTtRQUVsQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBTSxPQUFPLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0YsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsbUVBQW1FLENBQUMsQ0FBQztTQUN4RjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBWSxFQUFFLENBQVk7Z0JBQ3ZDLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFO29CQUN4QixPQUFPLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtpQkFDL0I7Z0JBQ0QsT0FBTyxDQUFDLENBQUM7WUFDYixDQUFDLENBQUMsQ0FBQTtTQUNMO0lBQ0wsQ0FBQztJQUVELHlCQUFTLEdBQVQ7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBRSxFQUFFLEtBQUs7WUFDekIsRUFBRSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbkMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQU0sT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLFNBQVMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksT0FBTyxFQUFFO1lBQ1QsT0FBTyw0QkFBMEIsT0FBTyxDQUFDLFNBQVMsU0FBSSxPQUFPLENBQUMsUUFBUSxrQkFBYSxTQUFTLE1BQUcsQ0FBQztTQUNuRztJQUNMLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxBQXpDRCxDQUEyQixrQkFBTSxHQXlDaEM7QUF6Q1ksc0JBQUsifQ==