namespace FoodAndBeverages {
    export interface Delivery {
        newCustomer(customerName: string, visited: boolean): any,
        visitCustomer(customerName: string): string,
        showCustomers(): string,
    }
}