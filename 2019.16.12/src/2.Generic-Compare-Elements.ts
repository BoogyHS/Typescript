class CompareElements<T>{
    constructor(public myArr: T[]) {
    }

    compare(comparator: T) {
        return this.myArr.filter(x => x === comparator).length;
    }
}
let c = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
console.log(c.compare(1));