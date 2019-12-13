"use strict";
function sortArr(arr, str) {
    if (str === 'asc') {
        return arr.sort((a, b) => {
            return a - b;
        });
    }
    return arr.sort((a, b) => {
        return b - a;
    });
}
console.log(sortArr([14, 7, 17, 6, 8], 'asc'));
