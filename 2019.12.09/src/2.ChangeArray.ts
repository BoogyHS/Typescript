function solve(arr: string[]) {
    let numberArr = arr[0].split(' ');
    for (let i = 1; i < arr.length; i++) {
        const [action, firstNum, secondNum] = arr[i].split(' ');
        // const element = Number(firstNum);
        // const position = Number(secondNum);
        if (action === 'end') {
            break;
        } else if (action === 'Delete') {
            numberArr = numberArr.filter(x => x !== firstNum);
        }else{
            numberArr.splice(+secondNum, 0, firstNum);
        }
    }
    return numberArr.join(' ');
}

console.log(solve(['1 2 3 4 5 5 5 6',
    'Delete 5',
    'Insert 10 1',
    'Delete 5',
    'end',]
));
