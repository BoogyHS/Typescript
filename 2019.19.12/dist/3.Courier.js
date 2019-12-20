"use strict";
/// <reference path = '3.FoodAndBeverages.ts'/>
var Courier = /** @class */ (function () {
    function Courier(placesToVisit) {
        this.placesToVisit = placesToVisit;
    }
    Courier.prototype.newCustomer = function (customerName, visited) {
        if (visited === void 0) { visited = false; }
        var customer = this.placesToVisit.find(function (x) { return x.customerName === customerName; });
        if (customer) {
            throw new Error(customerName + " is already a customer of yours!");
        }
        this.placesToVisit.push({ customerName: customerName, visited: false });
        return customerName + " just became your client.";
    };
    Courier.prototype.visitCustomer = function (customerName) {
        var customer = this.placesToVisit.find(function (x) { return x.customerName === customerName; });
        if (!customer) {
            throw new Error(customerName + " is not your customer");
        }
        else {
            customer.visited = true;
        }
        return "";
    };
    Courier.prototype.showCustomers = function () {
        var output = [];
        this.placesToVisit.forEach(function (el) {
            output.push(el.customerName + " -> " + el.visited);
        });
        return "" + output.join('\n');
    };
    return Courier;
}());
var courier = new Courier([{ 'customerName': 'DHL', 'visited': false }]);
courier.newCustomer('Speedy');
courier.newCustomer('MTM');
courier.newCustomer('TipTop');
courier.visitCustomer('DHL');
courier.visitCustomer('MTM');
courier.visitCustomer('MTM');
console.log(courier.showCustomers());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5Db3VyaWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjLzMuQ291cmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0NBQStDO0FBQy9DO0lBQ0ksaUJBQXNCLGFBQW9EO1FBQXBELGtCQUFhLEdBQWIsYUFBYSxDQUF1QztJQUUxRSxDQUFDO0lBQ0QsNkJBQVcsR0FBWCxVQUFZLFlBQW9CLEVBQUUsT0FBd0I7UUFBeEIsd0JBQUEsRUFBQSxlQUF3QjtRQUN0RCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxZQUFZLEtBQUssWUFBWSxFQUEvQixDQUErQixDQUFDLENBQUM7UUFDL0UsSUFBSSxRQUFRLEVBQUU7WUFDVixNQUFNLElBQUksS0FBSyxDQUFJLFlBQVkscUNBQWtDLENBQUMsQ0FBQztTQUN0RTtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN4RSxPQUFVLFlBQVksOEJBQTJCLENBQUE7SUFDckQsQ0FBQztJQUNELCtCQUFhLEdBQWIsVUFBYyxZQUFvQjtRQUM5QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxZQUFZLEtBQUssWUFBWSxFQUEvQixDQUErQixDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUksWUFBWSwwQkFBdUIsQ0FBQyxDQUFDO1NBQzNEO2FBQU07WUFDSCxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUMzQjtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNELCtCQUFhLEdBQWI7UUFDSSxJQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxFQUFFO1lBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUksRUFBRSxDQUFDLFlBQVksWUFBTyxFQUFFLENBQUMsT0FBUyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLEtBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUcsQ0FBQztJQUNsQyxDQUFDO0lBQ0wsY0FBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUFDRCxJQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXpFLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMzQixPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRTlCLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0IsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QixPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRTdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMifQ==