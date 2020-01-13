import IInterface from './classInterface'

class ChristmasDinner implements IInterface {
    protected _budget = 0;
    constructor(
        budget: number,
        public dishes: { recipeName: string, productsList: string[] }[] = [],
        public products: string[] = [],
        public guests: { [key: string]: string } = {}
    ) {
        this._budget = budget;
    }

    get budget() {
        return this._budget;
    }

    set budget(val: number) {
        if (val < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this._budget = val;
    }

    shopping(product: [string, number]): string {
        if (product[1] > this.budget) {
            throw new Error('Not enough money to buy this product');
        }
        this.budget -= product[1];
        this.products.push(product[0]);
        return `You have successfully bought ${product[0]}!`
    }

    recipes(recipe: { recipeName: string, productsList: string[] }): string {
        recipe.productsList.forEach(el => {
            if (!this.products.includes(el)) {
                throw new Error('We do not have this product');
            }
        });
        this.dishes.push(recipe);
        return `${recipe.recipeName} has been successfully cooked!`;
    }

    inviteGuests(name: string, dish: string): string {
        const isDish = this.dishes.find(x => x.recipeName === dish);
        if (isDish === undefined) {
            throw new Error('We do not have this dish');
        }
        if (this.guests.hasOwnProperty(name)) {
            throw new Error('This guest has already been invited');
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance(): string {
        const output: string[] = [];
        for (const guest in this.guests) {
            const currentDish = this.guests[guest];
            const filtered = this.dishes.find(x => x.recipeName === currentDish);
            output.push(`${guest} will eat ${currentDish}, which consists of ${filtered?.productsList.join(', ')}`);
        }
        return output.join('\n');
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
