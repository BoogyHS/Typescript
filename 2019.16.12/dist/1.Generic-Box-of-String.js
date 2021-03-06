"use strict";
var Box = /** @class */ (function () {
    function Box(data) {
        this.data = data;
    }
    Box.prototype.toString = function () {
        var type = typeof this.data;
        return this.data + " is of type " + type;
    };
    return Box;
}());
var box1 = new Box(['test']);
var box2 = new Box(20);
var box3 = new Box('Hello');
console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5HZW5lcmljLUJveC1vZi1TdHJpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvMS5HZW5lcmljLUJveC1vZi1TdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQ0ksYUFBbUIsSUFBTztRQUFQLFNBQUksR0FBSixJQUFJLENBQUc7SUFFMUIsQ0FBQztJQUNELHNCQUFRLEdBQVI7UUFDSSxJQUFNLElBQUksR0FBRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDOUIsT0FBVSxJQUFJLENBQUMsSUFBSSxvQkFBZSxJQUFNLENBQUM7SUFDN0MsQ0FBQztJQUNMLFVBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQUNELElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUM3QixJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyJ9