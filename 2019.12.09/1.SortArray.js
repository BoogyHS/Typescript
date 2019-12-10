"use strict";
function sortArr(arr, str) {
    if (str === 'asc') {
        return arr.sort(function (a, b) {
            return a - b;
        });
    }
    return arr.sort(function (a, b) {
        return b - a;
    });
}
sortArr([14, 7, 17, 6, 8], 'asc');
