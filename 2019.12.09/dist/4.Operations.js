"use strict";
function solve4(arr) {
    const myObj = {};
    for (let i = 0; i < arr.length; i += 2) {
        const product = arr[i];
        if (myObj.hasOwnProperty(product)) {
            myObj[product] += arr[i + 1];
        }
        else {
            myObj[product] = arr[i + 1];
        }
    }
    return myObj;
}
console.log(solve4(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]));
