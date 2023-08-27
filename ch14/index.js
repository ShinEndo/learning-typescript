// 14　構文の拡張
// *************************************************
// 14.1　クラスのパラメータープロパティ
// *************************************************
var Engineer = /** @class */ (function () {
    function Engineer(area) {
        this.area = area;
        console.log("I work in the ".concat(area, " area"));
    }
    return Engineer;
}());
new Engineer("mechanical").area;
var Engineer2 = /** @class */ (function () {
    function Engineer2(area) {
        this.area = area;
        console.log("I work in the ".concat(area, " area"));
    }
    return Engineer2;
}());
new Engineer2("mechanical").area;
