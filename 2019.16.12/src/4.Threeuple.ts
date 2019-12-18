import Tuple from './3.Tuple';

class Threeple<L, T, K> extends Tuple<T, K> {
    constructor(public parameterOne: T, public parameterTwo: K, public parameterThree: L) {
        super(parameterOne, parameterTwo);
    }
    toString() {
        return `${super.toString()} -> ${this.parameterThree}`;
    }
}

let n = new Threeple('Hello World', [1], 312);
console.log(n.toString());