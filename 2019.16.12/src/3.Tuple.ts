export default class Tuple<T, K>{
    constructor(public parameterOne: T, public parameterTwo: K) {
    }
    toString() {
        return `${this.parameterOne} -> ${this.parameterTwo}`
    }
}

// let n1 = new Tuple('Svetoslav', 'Sofia');
// console.log(n1.toString());

// let n2 = new Tuple("Apples", 10);
// console.log(n2.toString());

// let n3 = new Tuple(10, 100091)
// console.log(n3.toString());