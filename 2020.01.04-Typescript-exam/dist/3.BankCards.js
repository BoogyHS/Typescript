"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _1_BankOffice_1 = require("./1.BankOffice");
var CardService = /** @class */ (function () {
    function CardService() {
    }
    CardService.prototype.generateCardNumber = function (min, max) {
        if (min < 0 || min > max) {
            throw new Error("The numbers should start from 0 and min cannot be larger than max");
        }
        if (max > 9 || max < min) {
            throw new Error("The numbers should not be larger than 0 and max cannot be smaller than max");
        }
        var number = '';
        for (var i = 0; i <= 9; i++) {
            number += Math.floor(Math.random() * (max - min + 1)) + min;
        }
        return Number(number);
    };
    CardService.prototype.validatePIN = function (PIN) {
        var p = PIN + '';
        if (p.length !== 4) {
            throw new Error('Invalid PIN');
        }
        return PIN;
    };
    return CardService;
}());
var BankCards = /** @class */ (function (_super) {
    __extends(BankCards, _super);
    function BankCards() {
        var _this = _super.call(this) || this;
        _this.cardsArray = [];
        return _this;
    }
    Object.defineProperty(BankCards.prototype, "randomCard", {
        get: function () {
            return Math.floor(Math.random() * (100 - 0 + 1)) + 0;
        },
        enumerable: true,
        configurable: true
    });
    BankCards.prototype.createCard = function (cardType, PIN) {
        var bankCardNumber = this.generateCardNumber(0, 9);
        var pinCode = this.validatePIN(PIN);
        this.cardsArray.push({ cardType: cardType, PIN: pinCode, bankCardNumber: bankCardNumber });
    };
    BankCards.prototype.issueCard = function (customerID) {
        var found = _1_BankOffice_1.office.allCustomers.find(function (x) { return x.id === customerID; });
        if (!found) {
            throw new Error('Invalid customer.');
        }
        // const bankCard = this.randomCard;
        var bankCard = 0;
        if (this.cardsArray[bankCard] === undefined) {
            throw new Error("Invalid bank card");
        }
        var cardDetails = this.cardsArray[bankCard];
        this.cardsArray.splice(bankCard, 1);
        found.cardDetails = cardDetails;
    };
    BankCards.prototype.showCustomersWithCards = function () {
        var customersWithCards = _1_BankOffice_1.office.allCustomers.filter(function (x) { return x.cardDetails !== undefined; });
        customersWithCards.forEach(function (el) {
            console.log(el.firstName + " " + el.lastName + " has " + el.cardDetails.cardType + " with number " + el.cardDetails.cardNumber);
        });
    };
    return BankCards;
}(CardService));
var card = new BankCards();
card.createCard("Debit", 1111);
card.createCard("Visa", 2222);
card.createCard("Mastercard", 3333);
card.createCard("Maestro", 4444);
card.issueCard(1);
card.issueCard(2);
card.issueCard(3);
console.log(card.showCustomersWithCards());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5CYW5rQ2FyZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvMy5CYW5rQ2FyZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQW9EO0FBR3BEO0lBQUE7SUF1QkEsQ0FBQztJQXRCRyx3Q0FBa0IsR0FBbEIsVUFBbUIsR0FBVyxFQUFFLEdBQVc7UUFDdkMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUU7WUFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO1NBQ3hGO1FBQ0QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUU7WUFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw0RUFBNEUsQ0FBQyxDQUFDO1NBQ2pHO1FBRUQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUMvRDtRQUNELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksR0FBVztRQUNuQixJQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNsQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQUVEO0lBQXdCLDZC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