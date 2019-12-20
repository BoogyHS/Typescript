"use strict";
var CarDealer = /** @class */ (function () {
    function CarDealer(dealershipName, soldCars) {
        if (soldCars === void 0) { soldCars = 0; }
        this.dealershipName = dealershipName;
        this.soldCars = soldCars;
        this.modelsSold = {};
    }
    CarDealer.prototype.sellCar = function (dealerID, model) {
        this.soldCars += 1;
        this.modelsSold[dealerID] = model;
    };
    CarDealer.prototype.showDetails = function () {
        var printArr = [];
        for (var prop in this.modelsSold) {
            printArr.push(prop + " sold " + this.modelsSold[prop]);
        }
        return this.dealershipName + ":\n" + printArr.join("\n");
    };
    return CarDealer;
}());
var dealership = new CarDealer('SilverStar');
dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5DYXItRGVhbGVyc2hpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy81LkNhci1EZWFsZXJzaGlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFVQTtJQUVJLG1CQUFtQixjQUFpQixFQUFTLFFBQW9CO1FBQXBCLHlCQUFBLEVBQUEsWUFBb0I7UUFBOUMsbUJBQWMsR0FBZCxjQUFjLENBQUc7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFZO1FBRDFELGVBQVUsR0FBMkIsRUFBRSxDQUFBO0lBRTlDLENBQUM7SUFDRCwyQkFBTyxHQUFQLFVBQXNCLFFBQWdCLEVBQUUsS0FBUTtRQUM1QyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBQ0QsK0JBQVcsR0FBWDtRQUNJLElBQU0sUUFBUSxHQUFhLEVBQUUsQ0FBQTtRQUM3QixLQUFLLElBQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDaEMsUUFBUSxDQUFDLElBQUksQ0FBSSxJQUFJLGNBQVMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUcsQ0FBQyxDQUFBO1NBQ3pEO1FBQ0QsT0FBVSxJQUFJLENBQUMsY0FBYyxXQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFHLENBQUM7SUFDN0QsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFFRCxJQUFJLFVBQVUsR0FBRyxJQUFJLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUU3QyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztBQUN0QyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztBQUN0QyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztBQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDIn0=