"use strict";
var Family = /** @class */ (function () {
    function Family(family) {
        if (family === void 0) { family = []; }
        this.family = family;
    }
    Family.prototype.addNewMember = function (x) {
        return this.family.push(x);
    };
    Family.prototype.oldestMember = function () {
        var oldest = this.family.sort(function (a, b) { return b[1] - a[1]; })[0];
        return "The oldest member is " + oldest[0] + " and is " + oldest[1] + " years old.";
    };
    return Family;
}());
var member = new Family();
member.addNewMember(['Ivan', 13]);
member.addNewMember(['Todor', 45]);
member.addNewMember(['Georgi', 37]);
member.addNewMember(['Viktor', 30]);
console.log(member.oldestMember());
