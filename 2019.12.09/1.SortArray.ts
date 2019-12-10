function sortArr(arr: number[], str: string) {
    if (str === 'asc') {
        return arr.sort((a, b) => {
            return a - b;
        })
    }
    return arr.sort((a, b) => {
        return b - a;
    })
}
sortArr([14, 7, 17, 6, 8], 'asc');