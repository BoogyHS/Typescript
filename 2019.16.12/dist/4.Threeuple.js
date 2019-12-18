"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _3_Tuple_1 = __importDefault(require("./3.Tuple"));
var Threeple = /** @class */ (function (_super) {
    __extends(Threeple, _super);
    function Threeple(parameterOne, parameterTwo, parameterThree) {
        var _this = _super.call(this, parameterOne, parameterTwo) || this;
        _this.parameterOne = parameterOne;
        _this.parameterTwo = parameterTwo;
        _this.parameterThree = parameterThree;
        return _this;
    }
    Threeple.prototype.toString = function () {
        return _super.prototype.toString.call(this) + " -> " + this.parameterThree;
    };
    return Threeple;
}(_3_Tuple_1.default));
var n = new Threeple('Hello World', [1], 312);
console.log(n.toString());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5UaHJlZXVwbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvNC5UaHJlZXVwbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQThCO0FBRTlCO0lBQWdDLDRCQUFXO0lBQ3ZDLGtCQUFtQixZQUFlLEVBQVMsWUFBZSxFQUFTLGNBQWlCO1FBQXBGLFlBQ0ksa0JBQU0sWUFBWSxFQUFFLFlBQVksQ0FBQyxTQUNwQztRQUZrQixrQkFBWSxHQUFaLFlBQVksQ0FBRztRQUFTLGtCQUFZLEdBQVosWUFBWSxDQUFHO1FBQVMsb0JBQWMsR0FBZCxjQUFjLENBQUc7O0lBRXBGLENBQUM7SUFDRCwyQkFBUSxHQUFSO1FBQ0ksT0FBVSxpQkFBTSxRQUFRLFdBQUUsWUFBTyxJQUFJLENBQUMsY0FBZ0IsQ0FBQztJQUMzRCxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQUFQRCxDQUFnQyxrQkFBSyxHQU9wQztBQUVELElBQUksQ0FBQyxHQUFHLElBQUksUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMifQ==