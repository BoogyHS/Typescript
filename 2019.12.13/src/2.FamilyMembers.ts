class Family {
    constructor(public family: [string, number][] = []) {
    }
    addNewMember(x: [string, number]) {
        return this.family.push(x);
    }
    oldestMember() {
        const oldest = this.family.sort((a, b) => b[1] - a[1])[0];
        return `The oldest member is ${oldest[0]} and is ${oldest[1]} years old.`
    }
}
let member = new Family();
member.addNewMember(['Ivan', 13]);
member.addNewMember(['Todor', 45]);
member.addNewMember(['Georgi', 37]);
member.addNewMember(['Viktor', 30]);
console.log(member.oldestMember());
