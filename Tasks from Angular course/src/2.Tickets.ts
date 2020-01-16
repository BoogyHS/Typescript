function sorter(arr: string[], criteria: string) {
   
    type ITicket = {
        destination: string,
        price: string,
        status: string
    }
    
    const output: ITicket[] = [];
    arr.forEach(el => {
        const elArr = el.split('|');
        
        output.push({destination: elArr[0], price: elArr[1], status: elArr[2]})
    });

    let sortedArr = output.sort(
        //TODO
    )
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