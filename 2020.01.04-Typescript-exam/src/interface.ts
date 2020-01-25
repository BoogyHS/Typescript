export interface ICustomer {
    firstName: string,
    lastName: string,
    id: number,
    // [key: string]: any
}

export interface IContract  {
    validContract: boolean,
    salary: number,
    terms: number
}

export interface IOperations {
    depositMoney(customerID: number, amount: number): void,
    withdrawMoney(customerID: number, amount: number): void
}

export interface ICardService {
    createCard(cardType: string, PIN: number): void,
    issueCard(customerID: number): void,
    showCustomersWithCards(): void
}