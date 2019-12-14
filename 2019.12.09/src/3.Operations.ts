function solve1(arr: string[]) {
    const numbers = arr[0].split(' ').map(Number);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].startsWith('End')) {
            return numbers.join(' ');
        } else if (arr[i].startsWith('Add')) {
            const [command, n] = arr[i].split(' ');
            const number = Number(n);
            numbers.push(number);
        } else if (arr[i].startsWith('Insert')) {
            const [command, n, index] = arr[i].split(' ');
            const number = Number(n);
            const ind = Number(index);
            numbers.splice(ind, 0, number);
        } else if (arr[i].startsWith('Remove')) {
            const [command, index] = arr[i].split(' ');
            const ind = Number(index);
            numbers.splice(ind, 1);
        } else if (arr[i].startsWith('Shift left')) {
            const [p1, p2, c] = arr[i].split(' ');
            const count = Number(c);
            for (let j = 0; j < count; j++) {
                const replace = numbers.shift();
                if (replace) {
                    numbers.push(replace);
                }
            }
        } else if (arr[i].startsWith('Shift right')) {
            const [p1, p2, c] = arr[i].split(' ');
            const count = Number(c);
            for (let j = 0; j < count; j++) {
                const replace = numbers.pop();
                if (replace) {
                    numbers.unshift(replace);
                }
            }
        }
    }
    return numbers.join(' ');
}
console.log(solve1(
    ['1 23 29 18 43 21 20',
        'Add 5',
        'Remove 5',
        'Shift left 3',
        'Shift left 1',
        'End']
));
