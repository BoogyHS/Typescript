/// <reference path = '3.FoodAndBeverages.ts'/>
class Courier implements FoodAndBeverages.Delivery {
    constructor(protected placesToVisit: { [key: string]: string | boolean }[]) {

    }
    newCustomer(customerName: string, visited: boolean = false): any {
        const customer = this.placesToVisit.find(x => x.customerName === customerName);
        if (customer) {
            throw new Error(`${customerName} is already a customer of yours!`);
        }
        this.placesToVisit.push({ customerName: customerName, visited: false });
        return `${customerName} just became your client.`
    }
    visitCustomer(customerName: string): string {
        const customer = this.placesToVisit.find(x => x.customerName === customerName);
        if (!customer) {
            throw new Error(`${customerName} is not your customer`);
        } else {
            customer.visited = true;
        }
        return ``;
    }
    showCustomers(): string {
        const output: string[] = [];
        this.placesToVisit.forEach(el => {
            output.push(`${el.customerName} -> ${el.visited}`);
        })
        return `${output.join('\n')}`;
    }
}
let courier = new Courier([{ 'customerName': 'DHL', 'visited': false }]);

courier.newCustomer('Speedy');
courier.newCustomer('MTM');
courier.newCustomer('TipTop');

courier.visitCustomer('DHL');
courier.visitCustomer('MTM');
courier.visitCustomer('MTM');

console.log(courier.showCustomers());
