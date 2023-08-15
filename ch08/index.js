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
// 8.2.1　関数プロパティ
// *************************************************
var WithMethod = /** @class */ (function () {
    function WithMethod() {
    }
    WithMethod.prototype.myMethod = function () { };
    return WithMethod;
}());
console.log("□ クラスメソッドの比較 ---------------------");
console.log(new WithMethod().myMethod === new WithMethod().myMethod);
var WithProperty = /** @class */ (function () {
    function WithProperty() {
        this.myProperty = function () { };
    }
    return WithProperty;
}());
console.log("□ クラスプロパティの比較 ---------------------");
console.log(new WithProperty().myProperty === new WithProperty().myProperty);
var WithPropertyParameters = /** @class */ (function () {
    function WithPropertyParameters() {
        this.takesParameters = function (input) { return input ? "Yes" : "No"; };
    }
    return WithPropertyParameters;
}());
var instance = new WithPropertyParameters();
instance.takesParameters(true);
// instance.takesParameters(123); <- エラーになる
// 8.2.2　初期化チェック
// *************************************************
var WithValue = /** @class */ (function () {
    // unused: number; <- エラーになる
    function WithValue() {
        this.immediate = 0;
        this.later = 1;
    }
    return WithValue;
}());
// 厳格な初期化チェックをしていないので、
// Typescriptのコンパイルには成功するが、
// JavaScriptで実行するとクラッシュする
// -------------------------------------------------
// class MissingInitializer {
//     property: string;
// }
// new MissingInitializer().property.length;
// -------------------------------------------------
// 8.2.2.1　明確に割り当てられたプロパティ
// *************************************************
var ActivitiesQueue = /** @class */ (function () {
    function ActivitiesQueue() {
    }
    ActivitiesQueue.prototype.initialize = function (pending) {
        this.pending = pending;
    };
    ActivitiesQueue.prototype.next = function () {
        return this.pending.pop();
    };
    return ActivitiesQueue;
}());
var activities = new ActivitiesQueue();
activities.initialize(['eat', 'sleep', 'learn']);
activities.next();
