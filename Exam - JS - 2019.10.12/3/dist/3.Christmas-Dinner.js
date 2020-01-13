"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChristmasDinner = /** @class */ (function () {
    function ChristmasDinner(budget, dishes, products, guests) {
        if (dishes === void 0) { dishes = []; }
        if (products === void 0) { products = []; }
        if (guests === void 0) { guests = {}; }
        this.dishes = dishes;
        this.products = products;
        this.guests = guests;
        this._budget = 0;
        this._budget = budget;
    }
    Object.defineProperty(ChristmasDinner.prototype, "budget", {
        get: function () {
            return this._budget;
        },
        set: function (val) {
            if (val < 0) {
                throw new Error('The budget cannot be a negative number');
            }
            this._budget = val;
        },
        enumerable: true,
        configurable: true
    });
    ChristmasDinner.prototype.shopping = function (product) {
        if (product[1] > this.budget) {
            throw new Error('Not enough money to buy this product');
        }
        this.budget -= product[1];
        this.products.push(product[0]);
        return "You have successfully bought " + product[0] + "!";
    };
    ChristmasDinner.prototype.recipes = function (recipe) {
        var _this = this;
        recipe.productsList.forEach(function (el) {
            if (!_this.products.includes(el)) {
                throw new Error('We do not have this product');
            }
        });
        this.dishes.push(recipe);
        return recipe.recipeName + " has been successfully cooked!";
    };
    ChristmasDinner.prototype.inviteGuests = function (name, dish) {
        var isDish = this.dishes.find(function (x) { return x.recipeName === dish; });
        if (isDish === undefined) {
            throw new Error('We do not have this dish');
        }
        if (this.guests.hasOwnProperty(name)) {
            throw new Error('This guest has already been invited');
        }
        this.guests[name] = dish;
        return "You have successfully invited " + name + "!";
    };
    ChristmasDinner.prototype.showAttendance = function () {
        var _a;
        var output = [];
        var _loop_1 = function (guest) {
            var currentDish = this_1.guests[guest];
            var filtered = this_1.dishes.find(function (x) { return x.recipeName === currentDish; });
            output.push(guest + " will eat " + currentDish + ", which consists of " + ((_a = filtered) === null || _a === void 0 ? void 0 : _a.productsList.join(', ')));
        };
        var this_1 = this;
        for (var guest in this.guests) {
            _loop_1(guest);
        }
        return output.join('\n');
    };
    return ChristmasDinner;
}());
var dinner = new ChristmasDinner(300);
dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);
dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});
dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');
console.log(dinner.showAttendance());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5DaHJpc3RtYXMtRGlubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjLzMuQ2hyaXN0bWFzLURpbm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBRUkseUJBQ0ksTUFBYyxFQUNQLE1BQTZELEVBQzdELFFBQXVCLEVBQ3ZCLE1BQXNDO1FBRnRDLHVCQUFBLEVBQUEsV0FBNkQ7UUFDN0QseUJBQUEsRUFBQSxhQUF1QjtRQUN2Qix1QkFBQSxFQUFBLFdBQXNDO1FBRnRDLFdBQU0sR0FBTixNQUFNLENBQXVEO1FBQzdELGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0M7UUFMdkMsWUFBTyxHQUFHLENBQUMsQ0FBQztRQU9sQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0lBRUQsc0JBQUksbUNBQU07YUFBVjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO2FBRUQsVUFBVyxHQUFXO1lBQ2xCLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtnQkFDVCxNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7YUFDN0Q7WUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUN2QixDQUFDOzs7T0FQQTtJQVNELGtDQUFRLEdBQVIsVUFBUyxPQUF5QjtRQUM5QixJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzFCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQztTQUMzRDtRQUNELElBQUksQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sa0NBQWdDLE9BQU8sQ0FBQyxDQUFDLENB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