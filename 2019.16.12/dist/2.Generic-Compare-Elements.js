"use strict";
var CompareElements = /** @class */ (function () {
    function CompareElements(myArr) {
        this.myArr = myArr;
    }
    CompareElements.prototype.compare = function (comparator) {
        return this.myArr.filter(function (x) { return x === comparator; }).length;
    };
    return CompareElements;
}());
var c = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
console.log(c.compare(1));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5HZW5lcmljLUNvbXBhcmUtRWxlbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvMi5HZW5lcmljLUNvbXBhcmUtRWxlbWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQ0kseUJBQW1CLEtBQVU7UUFBVixVQUFLLEdBQUwsS0FBSyxDQUFLO0lBQzdCLENBQUM7SUFFRCxpQ0FBTyxHQUFQLFVBQVEsVUFBYTtRQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLFVBQVUsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUMzRCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQUNELElBQUksQ0FBQyxHQUFHLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyJ9