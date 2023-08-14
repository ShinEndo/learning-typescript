// 8　クラス
// *************************************************
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function (name) {
        console.log("".concat(name, ", do your stuff!"));
    };
    return Greeter;
}());
new Greeter().greet("Miss Frizzle");
// new Greeter().greet(); <- エラーになる
var Greeted = /** @class */ (function () {
    function Greeted(message) {
        console.log("As I always say: ".concat(message));
    }
    return Greeted;
}());
new Greeted("take chances, make mistakes, get messy");
// new Greeted(); <- エラーになる
// 8.2　クラスのプロパティ
// *************************************************
var FieldTrip = /** @class */ (function () {
    function FieldTrip(destination) {
        this.destination = destination;
        console.log("We're going to ".concat(this.destination));
        // this.nonexistent = destination; <- エラーになる
    }
    return FieldTrip;
}());
var trip = new FieldTrip("planetarium");
trip.destination;
// trip.noneexistent; <- エラーになる
