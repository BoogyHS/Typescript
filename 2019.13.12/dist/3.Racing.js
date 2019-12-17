"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Circuit = /** @class */ (function () {
    function Circuit(racers) {
        if (racers === void 0) { racers = []; }
        this.racers = racers;
    }
    Circuit.prototype.createRacer = function (name, fuel, position) {
        this.racers.push({ name: name, fuel: fuel, position: position });
        return { name: name, fuel: fuel, position: position };
    };
    Circuit.prototype.consumeFuel = function (usedFuel, name) {
        var racer = this.racers.filter(function (x) { return x.name === name; })[0];
        racer.fuel = racer.fuel - usedFuel;
        if (racer.fuel <= 0) {
            racer.isDNF = true;
        }
    };
    Circuit.prototype.overtake = function (gained, lost) {
        var _a;
        var overLoader = this.racers.findIndex(function (x) { return x.name === gained; });
        var overLoaded = this.racers.findIndex(function (x) { return x.name === lost; });
        if (overLoaded !== -1 && overLoader !== -1 && overLoaded === this.racers.length) {
            return console.log(overLoaded + " is on the back of the grid!");
        }
        else if (overLoaded !== -1 && overLoader !== -1 && overLoaded > overLoader) {
            var replacer = this.racers.slice(overLoader, overLoader + 1);
            this.racers.splice(overLoader, 1);
            (_a = this.racers).splice.apply(_a, __spreadArrays([overLoaded - 1, 1], replacer));
        }
    };
    Circuit.prototype.showPositions = function () {
        var filtered = this.racers.filter(function (x) { return !x.hasOwnProperty('isDFN'); });
        filtered.map(function (x, index) {
            return x.name + " finished on " + (index + 1) + " position with " + x.fuel + " l remaining";
        })
            .forEach(function (el) { return console.log(el); });
    };
    return Circuit;
}());
var c = new Circuit();
c.createRacer('Pesho', 5, 1);
c.consumeFuel(1, 'Pesho');
c.showPositions();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5SYWNpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvMy5SYWNpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFLQTtJQUNJLGlCQUFtQixNQUF5RjtRQUF6Rix1QkFBQSxFQUFBLFdBQXlGO1FBQXpGLFdBQU0sR0FBTixNQUFNLENBQW1GO0lBQzVHLENBQUM7SUFDRCw2QkFBVyxHQUFYLFVBQVksSUFBWSxFQUFFLElBQVksRUFBRSxRQUFnQjtRQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsQ0FBQztRQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLE1BQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFDRCw2QkFBVyxHQUFYLFVBQVksUUFBZ0IsRUFBRSxJQUFZO1FBQ3RDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQWYsQ0FBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUNuQyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ2pCLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQUNELDBCQUFRLEdBQVIsVUFBUyxNQUFjLEVBQUUsSUFBWTs7UUFDakMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO1FBQ2pFLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQWYsQ0FBZSxDQUFDLENBQUM7UUFDL0QsSUFBSSxVQUFVLEtBQUssQ0FBQyxDQUFDLElBQUksVUFBVSxLQUFLLENBQUMsQ0FBQyxJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUM3RSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUksVUFBVSxpQ0FBOEIsQ0FBQyxDQUFDO1NBQ25FO2FBQU0sSUFBSSxVQUFVLEtBQUssQ0FBQyxDQUFDLElBQUksVUFBVSxLQUFLLENBQUMsQ0FBQyxJQUFJLFVBQVUsR0FBRyxVQUFVLEVBQUU7WUFDMUUsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEMsQ0FBQSxLQUFBLElBQUksQ0FBQyxNQUFNLENBQUEsQ0FBQyxNQUFNLDJCQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFLLFFBQVEsR0FBRTtTQUN0RDtJQUNMLENBQUM7SUFDRCwrQkFBYSxHQUFiO1FBQ0ksSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztRQUNyRSxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxFQUFFLEtBQUs7WUFDbEIsT0FBVSxDQUFDLENBQUMsSUFBSSxzQkFBZ0IsS0FBSyxHQUFDLENBQUMsd0JBQWtCLENBQUMsQ0FBQyxJQUFJLGlCQUFjLENBQUM7UUFDbEYsQ0FBQyxDQUFDO2FBQ0csT0FBTyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBZixDQUFlLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBQ0wsY0FBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUFDRCxJQUFJLENBQUMsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3QixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMxQixDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMifQ==