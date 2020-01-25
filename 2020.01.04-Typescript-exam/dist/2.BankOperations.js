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
var _1_BankOffice_1 = require("./1.BankOffice");
var BankOperations = /** @class */ (function (_super) {
    __extends(BankOperations, _super);
    function BankOperations() {
        return _super.call(this) || this;
    }
    BankOperations.prototype.depositMoney = function (customerID, amount) {
        var found = _1_BankOffice_1.office.allCustomers.find(function (x) { return x.id === customerID; });
        if (!found) {
            throw new Error("You have no customer with this ID");
        }
        found.totalMoney = amount;
    };
    BankOperations.prototype.withdrawMoney = function (customerID, amount) {
        var _a;
        var found = _1_BankOffice_1.office.allCustomers.find(function (x) { return x.id === customerID; });
        if ((found && ((_a = found) === null || _a === void 0 ? void 0 : _a.totalMoney) < amount)) {
            throw new Error(found.firstName + " " + found.lastName + " does not have enough money to withdraw that amount");
        }
        else if (found) {
            found.totalMoney -= amount;
        }
    };
    BankOperations.prototype.takeLoan = function (customerID, loanAmount, years) {
        var _a;
        var found = _1_BankOffice_1.office.allCustomers.find(function (x) { return x.id === customerID; });
        if ((_a = found) === null || _a === void 0 ? void 0 : _a.validContract) {
            if (found && found.salary && found.terms) {
                var canTake = found.salary * found.terms * 12 - loanAmount > 0;
                if (canTake && found.terms > years) {
                    found.hasLoan = true;
                    return found.firstName + " " + found.lastName + " has been given a loan for " + years;
                }
                else {
                    throw new Error(found.firstName + " " + found.lastName + " cannot receive this loan");
                }
            }
        }
    };
    return BankOperations;
}(_1_BankOffice_1.BankOffice));
exports.BankOperations = BankOperations;
var operation = new BankOperations();
operation.depositMoney(1, 10000);
operation.withdrawMoney(1, 200);
console.log(operation.takeLoan(1, 10000, 2));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5CYW5rT3BlcmF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy8yLkJhbmtPcGVyYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUFvRDtBQUdwRDtJQUE4RSxrQ0FBZ0I7SUFDMUY7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFFRCxxQ0FBWSxHQUFaLFVBQWEsVUFBa0IsRUFBRSxNQUFjO1FBQzNDLElBQU0sS0FBSyxHQUFHLHNCQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBTSxPQUFPLENBQUMsQ0FBQyxFQUFFLEtBQUssVUFBVSxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztTQUN4RDtRQUNELEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFDRCxzQ0FBYSxHQUFiLFVBQWMsVUFBa0IsRUFBRSxNQUFjOztRQUM1QyxJQUFNLEtBQUssR0FBRyxzQkFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQU0sT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLFVBQVUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxLQUFLLElBQUksT0FBQSxLQUFLLDBDQUFFLFVBQVUsSUFBRyxNQUFNLENBQUMsRUFBRTtZQUN2QyxNQUFNLElBQUksS0FBSyxDQUFJLEtBQUssQ0FBQyxTQUFTLFNBQUksS0FBSyxDQUFDLFFBQVEsd0RBQXFELENBQUMsQ0FBQztTQUM5RzthQUFNLElBQUksS0FBSyxFQUFFO1lBQ2QsS0FBSyxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBQ0QsaUNBQVEsR0FBUixVQUFTLFVBQWtCLEVBQUUsVUFBa0IsRUFBRSxLQUFhOztRQUMxRCxJQUFNLEtBQUssR0FBRyxzQkFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQU0sT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLFVBQVUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVFLFVBQUksS0FBSywwQ0FBRSxhQUFhLEVBQUU7WUFDdEIsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUN0QyxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7Z0JBQ2pFLElBQUksT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFO29CQUNoQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDckIsT0FBVSxLQUFLLENBQUMsU0FBUyxTQUFJLEtBQUssQ0FBQyxRQUFRLG1DQUE4QixLQUFPLENBQUM7aUJBQ3BGO3FCQUFNO29CQUNILE1BQU0sSUFBSSxLQUFLLENBQUksS0FBSyxDQUFDLFNBQVMsU0FBSSxLQUFLLENBQUMsUUFBUSw4QkFBMkIsQ0FBQyxDQUFDO2lCQUNwRjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBbENELENBQThFLDBCQUFVLEdBa0N2RjtBQWxDWSx3Q0FBYztBQW9DM0IsSUFBSSxTQUFTLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztBQUVyQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNqQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBIn0=