"use strict";
var opn = require('open');
var Geolocation = /** @class */ (function () {
    function Geolocation(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
    Geolocation.prototype.showCoordinates = function () {
        opn("https://www.google.com/maps/@" + this.latitude + "," + this.longitude + ",15z", { wait: true });
    };
    return Geolocation;
}());
var locator = new Geolocation(42.698334, 23.319941);
locator.showCoordinates();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5HZW9sb2NhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy8xLkdlb2xvY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFNUI7SUFDSSxxQkFBbUIsUUFBeUIsRUFBUyxTQUEwQjtRQUE1RCxhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWlCO0lBQy9FLENBQUM7SUFDRCxxQ0FBZSxHQUFmO1FBQ0ksR0FBRyxDQUFDLGtDQUFnQyxJQUFJLENBQUMsUUFBUSxTQUFJLElBQUksQ0FBQyxTQUFTLFNBQU0sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQy9GLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3BELE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQyJ9