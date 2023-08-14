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
