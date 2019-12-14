"use strict";
function solve5(input) {
    const arr = input.split(' ').map(Number);
    const firstRacer = arr.slice(0, Math.floor(arr.length / 2));
    const secondRacer = arr.slice(Math.ceil(arr.length / 2)).reverse();
    let firstTime = 0;
    let secondTime = 0;
    firstRacer.forEach(el => {
        if (el !== 0) {
            firstTime += el;
        }
        else {
            firstTime = firstTime * 0.8;
        }
    });
    secondRacer.forEach(el => {
        if (el !== 0) {
            secondTime += el;
        }
        else {
            secondTime = secondTime * 0.8;
        }
    });
    return firstTime < secondTime
        ? `The winner is left with total time: ${firstTime.toFixed(2)}.`
        : `The winner is right with total time: ${secondTime.toFixed(2)}.`;
}
console.log(solve5('29 13 9 0 13 0 21 0 14 82 12'));
