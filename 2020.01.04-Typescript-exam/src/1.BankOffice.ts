import { ICustomer, IContract } from './interface';

type someType = {
    firstName: string,
    lastName: string,
    id: number,
    validContract?: boolean,
    salary?: number,
    terms?: number,
    [key: string]: any
}

export class BankOffice<T extends ICustomer, V extends IContract>{
    public allCustomers: someType[];

    constructor(private officeName: string = officeName) {
        this.allCustomers = [];
    }

    newCustomer(customer: T) {
        const found = this.allCustomers.find(x => {return x.firstName === customer.firstName && x.lastName === customer.lastName });
        if (found) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already your customer`);
        }

        this.allCustomers.push(customer);
    }

    presentContract(contract: V, customerID: number) {
        const found = this.allCustomers.find(x => {return x.id === customerID});
        if (!found) {
            throw new Error(`There is no customer with ${customerID}`);
        }

        found.salary = contract.salary;
        found.terms = contract.terms;
        found.validContract = contract.validContract;
    }

    hasComplaints(customerID: number, complaints: string | string[]) {
        const found = this.allCustomers.find(x => {return x.id === customerID});
        if (!found) {
            throw new Error(`Invalid customer`);
        }
        if (typeof complaints === 'string') {
            found.complaints = complaints;
        } else {
            type x = {
                [key: string]: string
            }
            const obj: x = {};
            complaints.forEach((el, index) => {
                const current = (index + 1).toString()
                obj[current] = el;
            })
            found.complaints = obj;
        }
    }

    showCustomerFile(customerID: number) {
        const found = this.allCustomers.find(x => {return x.id === customerID});
        if (!found) {
            throw new Error(`Invalid customer`);
        }
//         if (found.validContract) {
//             console.log(`Office: ${this.officeName}
// Customer name: ${found.firstName} ${found.lastName}
// Customer ID: ${found.customerID}`);
//             return;
//         }
        if (found.complaints !== undefined && found.validContract) {
            console.log(`Office: ${this.officeName}
Customer name: ${found.firstName} ${found.lastName}
Customer ID: ${found.customerID}
Valid contract: ${found.validContract}
Salary: ${found.salary}
Contract terms: ${found.terms}`);
            return;
        }
        if (typeof found.complaints === 'string' && !found.validContract) {
            console.log(`Office: ${this.officeName}
Customer name: ${found.firstName} ${found.lastName}
Customer ID: ${found.customerID}
Complaints: ${found.complaints}`);
            return;
        }
        console.log('\\TODO');
    }
}

export let office = new BankOffice('Pesho');

office.newCustomer({ firstName: 'Ivan', lastName: 'Ivanov', id: 1 })
office.presentContract({ validContract: true, salary: 3000, terms: 4 }, 1);
office.hasComplaints(1, ['Not enough money', 'Stolen money from account']);
console.log(office.showCustomerFile(1));
