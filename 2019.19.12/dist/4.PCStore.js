"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _4_Shop_abstr_1 = require("./4.Shop-abstr");
var PCStore = /** @class */ (function (_super) {
    __extends(PCStore, _super);
    function PCStore(shopName, shopAddress, budget, pcParts, pcCollection) {
        if (pcParts === void 0) { pcParts = {}; }
        if (pcCollection === void 0) { pcCollection = []; }
        var _this = _super.call(this, shopName, shopAddress) || this;
        _this.shopName = shopName;
        _this.shopAddress = shopAddress;
        _this.budget = budget;
        _this.pcParts = pcParts;
        _this.pcCollection = pcCollection;
        return _this;
    }
    PCStore.prototype.buyParts = function (part, price) {
        if (price <= this.budget) {
            if (!this.pcParts.hasOwnProperty(part)) {
                this.pcParts[part] = 1;
            }
            else {
                this.pcParts[part] += 1;
            }
            this.budget -= price;
        }
        else {
            throw new Error(this.shopName + " cannot afford that part.");
        }
    };
    PCStore.prototype.buildPC = function (neededParts, pcName, pcPrice) {
        var _this = this;
        neededParts.forEach(function (el) {
            if (!_this.pcParts.hasOwnProperty(el)) {
                throw new Error("You do not have all needed parts to build this PC");
            }
        });
        neededParts.forEach(function (el) {
            _this.pcParts[el] -= 1;
            if (_this.pcParts[el] === 0) {
                delete _this.pcParts[el];
            }
        });
        this.pcCollection.push({ pcName: pcName, neededParts: neededParts, pcPrice: pcPrice });
        return "You have just built " + pcName;
    };
    PCStore.prototype.sellPC = function (desiredPCName, clientBudget) {
        var found = this.pcCollection.find(function (x) { return x.pcName === desiredPCName; });
        if (found !== undefined) {
            if (clientBudget >= found.pcPrice) {
                this.pcCollection = this.pcCollection.filter(function (x) { return x.pcName !== desiredPCName; });
                this.budget += found.pcPrice;
                if (clientBudget > found.pcPrice) {
                    var moneyInReturn = clientBudget - found.pcPrice;
                    return "You successfully bought " + desiredPCName + " and you get " + moneyInReturn + " BGN in return";
                }
            }
        }
    };
    PCStore.prototype.showInventory = function () {
        var pcParts = Object.keys(this.pcParts);
        var pCs = [];
        this.pcCollection.forEach(function (el) {
            pCs.push(el.pcName);
        });
        return "Shop name: " + this.shopName + "\nShop address: " + this.shopAddress + "\nShop budget: " + this.budget + "\nPC parts in store: " + pcParts.join(', ') + "\nPCs in store: " + pCs.join(', ');
    };
    return PCStore;
}(_4_Shop_abstr_1.Shop));
var pcStore = new PCStore('AllBestPCs', 'Sofia', 10000);
pcStore.buyParts('CPU', 300);
pcStore.buyParts('CPU', 300);
pcStore.buyParts('CPU', 300);
pcStore.buyParts('CPU', 300);
pcStore.buyParts('Graphic card', 200);
pcStore.buyParts('Graphic card', 200);
pcStore.buyParts('Graphic card', 200);
pcStore.buyParts('RAM', 70);
pcStore.buyParts('RAM', 70);
pcStore.buyParts('HDD', 30);
pcStore.buyParts('HDD', 30);
pcStore.buyParts('HDD', 30);
pcStore.buyParts('HDD', 30);
pcStore.buyParts('HDD', 30);
pcStore.buyParts('SSD', 60);
pcStore.buyParts('SSD', 60);
pcStore.buyParts('SSD', 60);
pcStore.buildPC(['HDD', 'CPU', 'Graphic card', 'RAM'], 'Regular PC', 1000);
pcStore.buildPC(['HDD', 'SSD', 'CPU', 'Graphic card', 'RAM'], 'Gaming PC', 1700);
console.log(pcStore.sellPC('Regular PC', 1300));
console.log(pcStore.showInventory());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5QQ1N0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjLzQuUENTdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBc0M7QUFFdEM7SUFBc0IsMkJBQUk7SUFDdEIsaUJBQ2MsUUFBZ0IsRUFDaEIsV0FBbUIsRUFDbkIsTUFBYyxFQUNqQixPQUFxQyxFQUNyQyxZQUE2RTtRQUQ3RSx3QkFBQSxFQUFBLFlBQXFDO1FBQ3JDLDZCQUFBLEVBQUEsaUJBQTZFO1FBTHhGLFlBT0ksa0JBQU0sUUFBUSxFQUFFLFdBQVcsQ0FBQyxTQUMvQjtRQVBhLGNBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsaUJBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNqQixhQUFPLEdBQVAsT0FBTyxDQUE4QjtRQUNyQyxrQkFBWSxHQUFaLFlBQVksQ0FBaUU7O0lBR3hGLENBQUM7SUFFRCwwQkFBUSxHQUFSLFVBQVMsSUFBWSxFQUFFLEtBQWE7UUFDaEMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzFCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzNCO1lBQ0QsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUM7U0FDeEI7YUFBTTtZQUNILE1BQU0sSUFBSSxLQUFLLENBQUksSUFBSSxDQUFDLFFBQVEsOEJBQTJCLENBQUMsQ0FBQztTQUNoRTtJQUNMLENBQUM7SUFDRCx5QkFBTyxHQUFQLFVBQVEsV0FBcUIsRUFBRSxNQUFjLEVBQUUsT0FBZTtRQUE5RCxpQkFjQztRQWJHLFdBQVcs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