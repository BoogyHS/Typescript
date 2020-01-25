import { BankOffice, office } from './1.BankOffice';
import { ICardService } from './interface';

abstract class CardService {
    generateCardNumber(min: number, max: number): number {
        if (min < 0 || min > max) {
            throw new Error(`The numbers should start from 0 and min cannot be larger than max`);
        }
        if (max > 9 || max < min) {
            throw new Error(`The numbers should not be larger than 0 and max cannot be smaller than max`);
        }

        let number = '';
        for (let i = 0; i <= 9; i++) {
            number += Math.floor(Math.random() * (max - min + 1)) + min;
        }
        return Number(number);
    }

    validatePIN(PIN: number): number {
        const p = PIN + '';
        if (p.length !== 4) {
            throw new Error('Invalid PIN');
        }
        return PIN;
    }
}

class BankCards extends CardService implements ICardService {
    cardsArray: {}[];

    constructor() {
        super();
        this.cardsArray = [];
    }

    get randomCard() {
        return Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    }

    createCard(cardType: string, PIN: number): void {
        const bankCardNumber = this.generateCardNumber(0, 9);
        const pinCode = this.validatePIN(PIN);

        this.cardsArray.push({ cardType, PIN: pinCode, bankCardNumber });
    }

    issueCard(customerID: number): void {
        const found = office.allCustomers.find(x => { return x.id === customerID });
        if (!found) {
            throw new Error('Invalid customer.');
        }
        // const bankCard = this.randomCard;
        const bankCard = 0;
        if (this.cardsArray[bankCard] === undefined) {
            throw new Error(`Invalid bank card`);
        }
        const cardDetails = this.cardsArray[bankCard];
        this.cardsArray.splice(bankCard, 1);
        found.cardDetails = cardDetails;
    }

    showCustomersWithCards(): void {
        const customersWithCards = office.allCustomers.filter(x => { return x.cardDetails !== undefined });
        
        customersWithCards.forEach(el=>{
            console.log(`${el.firstName} ${el.lastName} has ${el.cardDetails.cardType} with number ${el.cardDetails.cardNumber}`);
        })
    }
}

let card = new BankCards();

card.createCard("Debit", 1111);
card.createCard("Visa", 2222);
card.createCard("Mastercard", 3333);
card.createCard("Maestro", 4444);
card.issueCard(1);
card.issueCard(2);
card.issueCard(3);
console.log(card.showCustomersWithCards());

