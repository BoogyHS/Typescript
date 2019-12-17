"use strict";
var Car = /** @class */ (function () {
    function Car(model, weight, color) {
        this.model = model;
        this.weight = weight;
        this.color = color;
    }
    return Car;
}());
var Engine = /** @class */ (function () {
    function Engine(model, power, displacement, efficiency) {
        this.model = model;
        this.power = power;
        this.displacement = displacement;
        this.efficiency = efficiency;
    }
    return Engine;
}());
var Details = /** @class */ (function () {
    function Details(Car, Engine) {
        this.Car = Car;
        this.Engine = Engine;
    }
    Details.prototype.print = function () {
        if (!this.Car.model || !this.Car.color || !this.Engine.displacement || !this.Engine.efficiency) {
            return "Vehicle model: " + this.Car.model + "\n            Engine model: " + this.Engine.model + "\n                Power: " + this.Engine.power;
        }
        return "Vehicle model: " + this.Car.model + "\n        Engine model: " + this.Engine.model + "\n            Power: " + this.Engine.power + "\n            Displacement: " + this.Engine.displacement + "\n            Efficiency: " + this.Engine.efficiency + "\n        Weight: " + this.Car.weight + "\n        Color: " + this.Car.color;
    };
    return Details;
}());
var s = new Details(new Car('C class', 3982, 'red'), new Engine('MB177', 510, 3982, 'A'));
console.log(s.print());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5DYXJEZXRhaWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjLzQuQ2FyRGV0YWlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBWUE7SUFDSSxhQUNXLEtBQWEsRUFDYixNQUFlLEVBQ2YsS0FBYztRQUZkLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBUztJQUN6QixDQUFDO0lBQ0wsVUFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBQ0Q7SUFDSSxnQkFDVyxLQUFhLEVBQ2IsS0FBYSxFQUNiLFlBQXFCLEVBQ3JCLFVBQW1CO1FBSG5CLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsaUJBQVksR0FBWixZQUFZLENBQVM7UUFDckIsZUFBVSxHQUFWLFVBQVUsQ0FBUztJQUM5QixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUFQRCxJQU9DO0FBQ0Q7SUFDSSxpQkFBbUIsR0FBUSxFQUFTLE1BQWM7UUFBL0IsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDbEQsQ0FBQztJQUNELHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDNUYsT0FBTyxvQkFBa0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLG9DQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssaUNBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBTyxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxvQkFBa0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLGdDQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssNkJBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxvQ0FDVixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksa0NBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSwwQkFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLHlCQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQU8sQ0FBQztJQUM5QixDQUFDO0lBQ0wsY0FBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFDRCxJQUFJLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyJ9