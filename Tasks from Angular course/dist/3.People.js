"use strict";
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }
    work() {
        const currentWork = this.tasks.shift();
        if (currentWork) {
            this.tasks.push(currentWork);
            console.log(this.name + currentWork);
        }
    }
    collectSallary() {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    }
    getSalary() {
        return this.salary;
    }
}
class Junior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.tasks.push('is working on a simple task.');
    }
}
class Senior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.tasks.push(...['is working on a complicated task.', 'is taking time off work.', 'is supervising junior workers.']);
    }
}
class Manager extends Employee {
    constructor(name, age) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.divident = 0;
        this.tasks.push(...['scheduled a meeting.', 'is preparing a quarterly report.']);
    }
    getSalary() {
        return this.salary + this.divident;
    }
}
//# sourceMappingURL=3.People.js.map