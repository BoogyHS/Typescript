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
var Activities = /** @class */ (function () {
    function Activities() {
    }
    return Activities;
}());
var ParkingLot = /** @class */ (function (_super) {
    __extends(ParkingLot, _super);
    function ParkingLot(capacity) {
        var _this = _super.call(this) || this;
        _this.capacity = capacity;
        _this.parkedVehicles = [];
        _this.revenue = 0;
        return _this;
    }
    ParkingLot.prototype.parkVehicle = function (plate) {
        if (this.capacity > this.parkedVehicles.length) {
            return this.parkedVehicles.push({ plate: plate, didPay: false });
        }
        throw new Error('No more available spaces in the parking lot!');
    };
    ParkingLot.prototype.payForStay = function (hours, rate, plate) {
        var x = this.parkedVehicles.find(function (x) { return x.plate === plate; });
        if (x) {
            this.revenue += hours * rate;
            x.didPay = true;
            return;
        }
        throw new Error('There is no such vehicle parked in the parking lot!');
    };
    ParkingLot.prototype.leaveTheParking = function (plate) {
        var x = this.parkedVehicles.find(function (x) { return x.plate === plate; });
        if (x && x.didPay === true) {
            this.parkedVehicles = this.parkedVehicles.filter(function (x) { return x.plate !== plate; });
        }
    };
    ParkingLot.prototype.overview = function () {
        return "The current revenue of the parking lot is " + this.revenue + " and " + this.parkedVehicles.map(function (el) { return el.plate; }).join(', ') + " are parked!";
    };
    return ParkingLot;
}(Activities));
var p = new ParkingLot(5);
p.parkVehicle('CA1111CA');
p.parkVehicle('CA2222CA');
p.parkVehicle('CA3333CA');
p.parkVehicle('CA4444CA');
p.parkVehicle('CA5555CA');
p.payForStay(4, 2, 'CA1111CA');
p.payForStay(2, 2, 'CA2222CA');
p.payForStay(7, 2, 'CA4444CA');
p.leaveTheParking('CA1111CA');
p.leaveTheParking('CA4444CA');
console.log(p.overview());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5QYXJraW5nTG90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjLzUuUGFya2luZ0xvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFJQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUlEO0lBQXlCLDhCQUFVO0lBRy9CLG9CQUFtQixRQUFnQjtRQUFuQyxZQUNJLGlCQUFPLFNBR1Y7UUFKa0IsY0FBUSxHQUFSLFFBQVEsQ0FBUTtRQUUvQixLQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN6QixLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQzs7SUFDckIsQ0FBQztJQUVELGdDQUFXLEdBQVgsVUFBWSxLQUFhO1FBQ3JCLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUM1QyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDN0Q7UUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELCtCQUFVLEdBQVYsVUFBVyxLQUFhLEVBQUUsSUFBWSxFQUFFLEtBQWE7UUFDakQsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBakIsQ0FBaUIsQ0FBRSxDQUFBO1FBQzVELElBQUksQ0FBQyxFQUFFO1lBQ0gsSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQzdCLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLE9BQU87U0FDVjtRQUNELE1BQU0sSUFBSSxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQTtJQUMxRSxDQUFDO0lBRUQsb0NBQWUsR0FBZixVQUFnQixLQUFhO1FBQ3pCLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQWpCLENBQWlCLENBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQWpCLENBQWlCLENBQUUsQ0FBQztTQUM5RTtJQUNMLENBQUM7SUFFRCw2QkFBUSxHQUFSO1FBQ0ksT0FBTywrQ0FBNkMsSUFBSSxDQUFDLE9BQU8sYUFBUSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEVBQUUsSUFBRSxPQUFBLEVBQUUsQ0FBQyxLQUFLLEVBQVIsQ0FBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBYyxDQUFDO0lBQzNJLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUFwQ0QsQ0FBeUIsVUFBVSxHQW9DbEM7QUFFRCxJQUFJLENBQUMsR0FBRyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQixDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzFCLENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDMUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMxQixDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzFCLENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFMUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFFL0IsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRTlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMifQ==