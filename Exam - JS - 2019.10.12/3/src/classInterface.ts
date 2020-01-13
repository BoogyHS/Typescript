export default interface IInterface {
    budget: number,
    dishes: { recipeName: string, productsList: string[] }[],
    products: string[],
    guests: { [key: string]: any },
    shopping(product: [string, number]): string,
    recipes(recipe: { recipeName: string, productsList: string[] }): string,
    inviteGuests(name: string, dish: string): string,
    showAttendance(): string,
}