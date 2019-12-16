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
