"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Racers = /** @class */ (function () {
    function Racers() {
        this.allRacers = [];
    }
    Racers.prototype.createRacer = function (firstName, lastName, dateOfBirth, id) {
        var found = this.allRacers.find(function (x) { return x.firstName === firstName && x.lastName === lastName; });
        if (found) {
            throw new Error(firstName + " " + lastName + " already exists on the grid");
        }
        if (this.allRacers.length > 20) {
            throw new Error('You have exceeded the maximum number of racers on the grid');
        }
        var newRacer = {
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth,
            id: id
        };
        this.allRacers.push(newRacer);
    };
    Racers.prototype.signContract = function (id, racingTeam, salary, terms) {
        var found = this.allRacers.find(function (x) { return x.id === id; });
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
        var found = this.allRacers.find(function (x) { return x.id === id; });
        if (!found) {
            throw new Error('There is no racer who meets the criteria');
        }
        found.salary = salary;
        found.terms = terms;
        return found.firstName + " " + found.lastName + " has renewed his contract with " + found.racingTeam + " for " + terms + " years.";
    };
    Racers.prototype.signWithNewTeam = function (id, racingTeam, salary, terms) {
        var found = this.allRacers.find(function (x) { return x.id === id; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5SYWNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvMS5SYWNlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUlJO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDRCQUFXLEdBQVgsVUFBWSxTQUFpQixFQUFFLFFBQWdCLEVBQUUsV0FBbUIsRUFBRSxFQUFVO1FBRTVFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFNLE9BQU8sQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksQ0FBQyxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4RyxJQUFJLEtBQUssRUFBRTtZQUNQLE1BQU0sSUFBSSxLQUFLLENBQUksU0FBUyxTQUFJLFFBQVEsZ0NBQTZCLENBQUMsQ0FBQztTQUMxRTtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFO1lBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsNERBQTRELENBQUMsQ0FBQztTQUNqRjtRQUNELElBQU0sUUFBUSxHQUFVO1lBQ3BCLFNBQVMsV0FBQTtZQUNULFFBQVEsVUFBQTtZQUNSLFdBQVcsYUFBQTtZQUNYLEVBQUUsSUFBQTtTQUNMLENBQUE7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsNkJBQVksR0FBWixVQUFhLEVBQVUsRUFBRSxVQUFrQixFQUFFLE1BQWMsRUFBRSxLQUFhO1FBRXRFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFPLE9BQU8sQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVoRSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDekIsS0FBSyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDOUIsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdEIsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFcEIsT0FBVSxLQUFLLENBQUMsU0FBUyxTQUFJLEtBQUssQ0FBQyxRQUFRLHlDQUFvQyxVQUFVLGFBQVEsS0FBSyxXQUFRLENBQUE7SUFDbEgsQ0FBQztJQUVELDhCQUFhLEdBQWIsVUFBYyxFQUFVLEVBQUUsTUFBYyxFQUFFLEtBQWE7UUFFbkQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQU0sT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRS9ELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7U0FDL0Q7UUFFRCxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN0QixLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVwQixPQUFVLEtBQUssQ0FBQyxTQUFTLFNBQUksS0FBSyxDQUFDLFFBQVEsdUNBQWtDLEtBQUssQ0FBQyxVQUFVLGFBQVEsS0FBSyxZQUFTLENBQUE7SUFDdkgsQ0FBQztJQUVELGdDQUFlLEdBQWYsVUFBZ0IsRUFBVSxFQUFFLFVBQWtCLEVBQUUsTUFBYyxFQUFFLEtBQWE7UUFFekUsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQU0sT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFVBQVUsS0FBSyxVQUFVLENBQUMsRUFBRTtZQUN0RCxNQUFNLElBQUksS0FBSyxDQUFDLDhFQUE4RSxDQUFDLENBQUM7U0FDbkc7UUFDRCxLQUFLLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM5QixLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN0QixLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVwQixPQUFVLEtBQUssQ0FBQyxTQUFTLFNBQUksS0FBSyxDQUFDLFFBQVEscURBQWdELFVBQVUsYUFBUSxLQUFLLFlBQVMsQ0FBQztJQUNoSSxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUFwRUQsSUFvRUM7QUFwRVksd0JBQU0ifQ==