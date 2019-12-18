class Box<T>{
    constructor(public data: T){

    }
    toString(){
        const type = typeof this.data;
        return `${this.data} is of type ${type}`;
    }
}
let box1 = new Box(['test']);
let box2 = new Box(20);
let box3 = new Box('Hello');

console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());
