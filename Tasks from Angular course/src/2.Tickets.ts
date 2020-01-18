interface ITicket {
    destination: string,
    price: number,
    status: string
}

function sorter(arr: string[], criteria: keyof ITicket) {

    const output: ITicket[] = [];
    arr.forEach(el => {
        const elArr = el.split('|');
        const price = Number(elArr[1])

        output.push({ destination: elArr[0], price, status: elArr[2] })
    });


    let sortedArr = output.sort((a: ITicket, b: ITicket) => {
        if (a[criteria] > b[criteria]) {
            return 1;
        } else if (a[criteria] < b[criteria]) {
            return -1;
        }
        return 0;
    });
    console.log(sortedArr);
    return sortedArr;
}

sorter([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'destination');
    
sorter([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'status');