import { Shop } from "./4.Shop-abstr";

class PCStore extends Shop {
    constructor(
        protected shopName: string,
        protected shopAddress: string,
        protected budget: number,
        public pcParts: { [key: string]: number }={},
        public pcCollection: { pcName: string, neededParts: string[], pcPrice: number }[]=[],
    ) {
        super(shopName, shopAddress);
    }

    buyParts(part: string, price: number) {
        if (price <= this.budget) {
            if (!this.pcParts.hasOwnProperty(part)) {
                this.pcParts[part] = 1;
            } else {
                this.pcParts[part] += 1;
            }
            this.budget -= price;
        } else {
            throw new Error(`${this.shopName} cannot afford that part.`);
        }
    }
    buildPC(neededParts: string[], pcName: string, pcPrice: number) {
        neededParts.forEach(el => {
            if (!this.pcParts.hasOwnProperty(el)) {
                throw new Error(`You do not have all needed parts to build this PC`);
            }
        });
        neededParts.forEach(el => {
            this.pcParts[el] -= 1;
            if (this.pcParts[el] === 0) {
                delete this.pcParts[el];
            }
        })
        this.pcCollection.push({ pcName, neededParts, pcPrice });
        return `You have just built ${pcName}`;
    }
    sellPC(desiredPCName: string, clientBudget: number) {
        const found = this.pcCollection.find(x => x.pcName === desiredPCName);
        if (found !== undefined) {
            if (clientBudget >= found.pcPrice) {
                this.pcCollection = this.pcCollection.filter(x => x.pcName !== desiredPCName);
                this.budget += found.pcPrice;
                if (clientBudget > found.pcPrice) {
                    const moneyInReturn = clientBudget - found.pcPrice;
                    return `You successfully bought ${desiredPCName} and you get ${moneyInReturn} BGN in return`;
                }
            }
        }
    }
    showInventory() {
        const pcParts = Object.keys(this.pcParts);
        const pCs: string[] = [];
        this.pcCollection.forEach(el => {
            pCs.push(el.pcName);
        });
        return `Shop name: ${this.shopName}
Shop address: ${this.shopAddress}
Shop budget: ${this.budget}
PC parts in store: ${pcParts.join(', ')}
PCs in store: ${pCs.join(', ')}`;
    }
}
let pcStore = new PCStore('AllBestPCs', 'Sofia', 10000);
 
pcStore.buyParts('CPU', 300);
pcStore.buyParts('CPU', 300);
pcStore.buyParts('CPU', 300);
pcStore.buyParts('CPU', 300);
pcStore.buyParts('Graphic card', 200);
pcStore.buyParts('Graphic card', 200);
pcStore.buyParts('Graphic card', 200);
pcStore.buyParts('RAM', 70);
pcStore.buyParts('RAM', 70);
pcStore.buyParts('HDD', 30);
pcStore.buyParts('HDD', 30);
pcStore.buyParts('HDD', 30);
pcStore.buyParts('HDD', 30);
pcStore.buyParts('HDD', 30);
pcStore.buyParts('SSD', 60);
pcStore.buyParts('SSD', 60);
pcStore.buyParts('SSD', 60);
 
pcStore.buildPC(['HDD', 'CPU', 'Graphic card', 'RAM'], 'Regular PC', 1000);
pcStore.buildPC(['HDD', 'SSD', 'CPU', 'Graphic card', 'RAM'], 'Gaming PC', 1700);
 
console.log(pcStore.sellPC('Regular PC', 1300));
console.log(pcStore.showInventory());
