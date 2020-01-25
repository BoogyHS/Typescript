import { BankOffice, office } from './1.BankOffice';
import { IOperations, ICustomer, IContract } from './interface';

export class BankOperations<T extends ICustomer, V extends IContract> extends BankOffice<T, V> implements IOperations {
    constructor() {
        super();
    }

    depositMoney(customerID: number, amount: number): void {
        const found = office.allCustomers.find(x => { return x.id === customerID });
        if (!found) {
            throw new Error(`You have no customer with this ID`);
        }
        found.totalMoney = amount;
    }
    withdrawMoney(customerID: number, amount: number): void {
        const found = office.allCustomers.find(x => { return x.id === customerID });
        if ((found && found?.totalMoney < amount)) {
            throw new Error(`${found.firstName} ${found.lastName} does not have enough money to withdraw that amount`);
        } else if (found) {
            found.totalMoney -= amount;
        }
    }
    takeLoan(customerID: number, loanAmount: number, years: number) {
        const found = office.allCustomers.find(x => { return x.id === customerID });
        if (found?.validContract) {
            if (found && found.salary && found.terms) {
                const canTake = found.salary * found.terms * 12 - loanAmount > 0;
                if (canTake && found.terms > years) {
                    found.hasLoan = true;
                    return `${found.firstName} ${found.lastName} has been given a loan for ${years}`;
                } else {
                    throw new Error(`${found.firstName} ${found.lastName} cannot receive this loan`);
                }
            }
        }
    }
}

let operation = new BankOperations();

operation.depositMoney(1, 10000);
operation.withdrawMoney(1, 200);
console.log(operation.takeLoan(1, 10000, 2))

