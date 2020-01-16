abstract class Employee {
    public salary: number;
    public tasks: string[];
    constructor(public name: string, public age: number) {

        this.salary = 0;
        this.tasks = [];
    }

    work(): void {
        const currentWork = this.tasks.shift();
        if (currentWork) {
            this.tasks.push(currentWork);
            console.log(this.name + currentWork);
        }
    }

    collectSallary(): void {
        console.log(`${this.name} received ${this.getSalary()} this month.`);

    }

    getSalary(): number {
        return this.salary;
    }
}

class Junior extends Employee {
    constructor(public name: string, public age: number) {
        super(name, age);
        this.tasks.push('is working on a simple task.');
    }


}
class Senior extends Employee {
    constructor(public name: string, public age: number) {
        super(name, age);
        this.tasks.push(...['is working on a complicated task.', 'is taking time off work.', 'is supervising junior workers.']);
    }
}
class Manager extends Employee {
    public divident: number;
    constructor(public name: string, public age: number) {
        super(name, age);
        this.divident = 0;
        this.tasks.push(...['scheduled a meeting.', 'is preparing a quarterly report.']);
    }

    public getSalary() {
        return this.salary + this.divident;
    }
}