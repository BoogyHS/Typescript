"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduction = function () {
        return "My name is " + this.name + " and I am " + this.age + " years old.";
    };
    Person.prototype.sayGoodbye = function (name) {
        return "Dear " + name + ", it was a pleasure meeting you!";
    };
    return Person;
}());
var p = new Person('Ivan Ivanov', 25);
console.log(p.introduction());
console.log(p.sayGoodbye('Petar Petrov'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5QZXJzb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvMi5QZXJzb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGdCQUFvQixJQUFZLEVBQVUsR0FBVztRQUFqQyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBUTtJQUNyRCxDQUFDO0lBQ0QsNkJBQVksR0FBWjtRQUNJLE9BQU8sZ0JBQWMsSUFBSSxDQUFDLElBQUksa0JBQWEsSUFBSSxDQUFDLEdBQUcsZ0JBQWEsQ0FBQztJQUNyRSxDQUFDO0lBQ0QsMkJBQVUsR0FBVixVQUFXLElBQU87UUFDZCxPQUFPLFVBQVEsSUFBSSxxQ0FBa0MsQ0FBQztJQUMxRCxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRXRDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7QUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMifQ==