"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BankOffice = /** @class */ (function () {
    function BankOffice(officeName) {
        if (officeName === void 0) { officeName = officeName; }
        this.officeName = officeName;
        this.allCustomers = [];
    }
    BankOffice.prototype.newCustomer = function (customer) {
        var found = this.allCustomers.find(function (x) { return x.firstName === customer.firstName && x.lastName === customer.lastName; });
        if (found) {
            throw new Error(customer.firstName + " " + customer.lastName + " is already your customer");
        }
        this.allCustomers.push(customer);
    };
    BankOffice.prototype.presentContract = function (contract, customerID) {
        var found = this.allCustomers.find(function (x) { return x.id === customerID; });
        if (!found) {
            throw new Error("There is no customer with " + customerID);
        }
        found.salary = contract.salary;
        found.terms = contract.terms;
        found.validContract = contract.validContract;
    };
    BankOffice.prototype.hasComplaints = function (customerID, complaints) {
        var found = this.allCustomers.find(function (x) { return x.id === customerID; });
        if (!found) {
            throw new Error("Invalid customer");
        }
        if (typeof complaints === 'string') {
            found.complaints = complaints;
        }
        else {
            var obj_1 = {};
            complaints.forEach(function (el, index) {
                var current = (index + 1).toString();
                obj_1[current] = el;
            });
            found.complaints = obj_1;
        }
    };
    BankOffice.prototype.showCustomerFile = function (customerID) {
        var found = this.allCustomers.find(function (x) { return x.id === customerID; });
        if (!found) {
            throw new Error("Invalid customer");
        }
        //         if (found.validContract) {
        //             console.log(`Office: ${this.officeName}
        // Customer name: ${found.firstName} ${found.lastName}
        // Customer ID: ${found.customerID}`);
        //             return;
        //         }
        if (found.complaints !== undefined && found.validContract) {
            console.log("Office: " + this.officeName + "\nCustomer name: " + found.firstName + " " + found.lastName + "\nCustomer ID: " + found.customerID + "\nValid contract: " + found.validContract + "\nSalary: " + found.salary + "\nContract terms: " + found.terms);
            return;
        }
        if (typeof found.complaints === 'string' && !found.validContract) {
            console.log("Office: " + this.officeName + "\nCustomer name: " + found.firstName + " " + found.lastName + "\nCustomer ID: " + found.customerID + "\nComplaints: " + found.complaints);
            return;
        }
        console.log('\\TODO');
    };
    return BankOffice;
}());
exports.BankOffice = BankOffice;
exports.office = new BankOffice('Pesho');
exports.office.newCustomer({ firstName: 'Ivan', lastName: 'Ivanov', id: 1 });
exports.office.presentContract({ validContract: true, salary: 3000, terms: 4 }, 1);
exports.office.hasComplaints(1, ['Not enough money', 'Stolen money from account']);
console.log(exports.office.showCustomerFile(1));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5CYW5rT2ZmaWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjLzEuQmFua09mZmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVlBO0lBR0ksb0JBQW9CLFVBQStCO1FBQS9CLDJCQUFBLEVBQUEsdUJBQStCO1FBQS9CLGVBQVUsR0FBVixVQUFVLENBQXFCO1FBQy9DLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxnQ0FBVyxHQUFYLFVBQVksUUFBVztRQUNuQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSyxPQUFPLENBQUMsQ0FBQyxTQUFTLEtBQUssUUFBUSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxRQUFRLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1SCxJQUFJLEtBQUssRUFBRTtZQUNQLE1BQU0sSUFBSSxLQUFLLENBQUksUUFBUSxDQUFDLFNBQVMsU0FBSSxRQUFRLENBQUMsUUFBUSw4QkFBMkIsQ0FBQyxDQUFDO1NBQzFGO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELG9DQUFlLEdBQWYsVUFBZ0IsUUFBVyxFQUFFLFVBQWtCO1FBQzNDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFLLE9BQU8sQ0FBQyxDQUFDLEVBQUUsS0FBSyxVQUFVLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBNkIsVUFBWSxDQUFDLENBQUM7U0FDOUQ7UUFFRCxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDL0IsS0FBSyxDQUFDLEtB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