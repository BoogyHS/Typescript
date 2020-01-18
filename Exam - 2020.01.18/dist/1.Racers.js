"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Racers = /** @class */ (function () {
    function Racers() {
        Racers.allRacers = [];
    }
    Racers.prototype.createRacer = function (firstName, lastName, dateOfBirth, id) {
        var found = Racers.allRacers.find(function (x) { return x.firstName === firstName && x.lastName === lastName; });
        if (found) {
            throw new Error(firstName + " " + lastName + " already exists on the grid");
        }
        if (Racers.allRacers.length > 20) {
            throw new Error('You have exceeded the maximum number of racers on the grid');
        }
        var newRacer = {
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth,
            id: id
        };
        Racers.allRacers.push(newRacer);
    };
    Racers.prototype.signContract = function (id, racingTeam, salary, terms) {
        var found = Racers.allRacers.find(function (x) { return x.id === id; });
        if (!found) {
            throw new Error('There is not such racer on the grid');
        }
        found.hasContract = true;
        found.racingTeam = racingTeam;
        found.salary = salary;
        found.terms = terms;
        return found.firstName + " " + found.lastName + " has just signed a contract with " + racingTeam + " for " + terms + " years";
    };
    Racers.prototype.renewContract = function (id, salary, terms) {
        var found = Racers.allRacers.find(function (x) { return x.id === id; });
        if (!found) {
            throw new Error('There is no racer who meets the criteria');
        }
        found.salary = salary;
        found.terms = terms;
        return found.firstName + " " + found.lastName + " has renewed his contract with " + found.racingTeam + " for " + terms + " years.";
    };
    Racers.prototype.signWithNewTeam = function (id, racingTeam, salary, terms) {
        var found = Racers.allRacers.find(function (x) { return x.id === id; });
        if (!found || (found && found.racingTeam === racingTeam)) {
            throw new Error('There is no racer who meets the criteria or he is currently in the same team');
        }
        found.racingTeam = racingTeam;
        found.salary = salary;
        found.terms = terms;
        return found.firstName + " " + found.lastName + " has renewed his contract with his new team -" + racingTeam + " for " + terms + " years.";
    };
    return Racers;
}());
exports.Racers = Racers;
exports.racers = new Racers();
exports.racers.createRacer('Lewis', 'Hamilton', '11.12.1988', 44);
exports.racers.signContract(44, 'Mercedes', 10000000, 4);
exports.racers.createRacer('Sebastian', 'Vettel', '11.11.1986', 5);
exports.racers.signContract(5, 'Ferrari', 4899990, 2);
exports.racers.createRacer('Valteri', 'Bottas', '11.11.1986', 22);
exports.racers.signContract(22, 'Mercedes', 900000, 2);
exports.racers.createRacer('Max', 'Verstappen', '11.11.1986', 33);
console.log(exports.racers.signContract(33, 'Redbull', 900100, 3));
console.log(exports.racers.renewContract(33, 98765, 4));
console.log(exports.racers.signWithNewTeam(5, 'Redbull', 1234567, 2));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5SYWNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvMS5SYWNlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUlJO1FBQ0ksTUFBTSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELDRCQUFXLEdBQVgsVUFBWSxTQUFpQixFQUFFLFFBQWdCLEVBQUUsV0FBbUIsRUFBRSxFQUFVO1FBRTVFLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFNLE9BQU8sQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksQ0FBQyxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUxRyxJQUFJLEtBQUssRUFBRTtZQUNQLE1BQU0sSUFBSSxLQUFLLENBQUksU0FBUyxTQUFJLFFBQVEsZ0NBQTZCLENBQUMsQ0FBQztTQUMxRTtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFO1lBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMsNERBQTRELENBQUMsQ0FBQztTQUNqRjtRQUNELElBQU0sUUFBUSxHQUFVO1lBQ3BCLFNBQVMsV0FBQTtZQUNULFFBQVEsVUFBQTtZQUNSLFdBQVcsYUFBQTtZQUNYLEVBQUUsSUFBQTtTQUNMLENBQUE7UUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsNkJBQVksR0FBWixVQUFhLEVBQVUsRUFBRSxVQUFrQixFQUFFLE1BQWMsRUFBRSxLQUFhO1FBRXRFLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFPLE9BQU8sQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsRSxJQUFJLENB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