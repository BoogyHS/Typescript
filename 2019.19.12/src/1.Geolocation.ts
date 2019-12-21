const opn = require('open');

class Geolocation {
    constructor(public latitude: string | number, public longitude: string | number, ) {
    }
    showCoordinates() {
        opn(`https://www.google.com/maps/@${this.latitude},${this.longitude},15z`, { wait: true });
    }
}

let locator = new Geolocation(42.698334, 23.319941);
locator.showCoordinates();