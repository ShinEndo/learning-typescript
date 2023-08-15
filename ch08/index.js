var _a;
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
// 8.2.3　オプションプロパティ
// *************************************************
var MissingInitializer2 = /** @class */ (function () {
    function MissingInitializer2() {
    }
    return MissingInitializer2;
}());
(_a = new MissingInitializer2().property) === null || _a === void 0 ? void 0 : _a.length;
// new MissingInitializer2().property.length; <- エラーになる
// 8.2.4　読み取り専用プロパティ
// *************************************************
var Quote = /** @class */ (function () {
    function Quote(text) {
        this.text = text;
    }
    Quote.prototype.emphasize = function () {
        // this.text += "!"; <- エラーになる
    };
    return Quote;
}());
var quote = new Quote("There is a brilliant child locked inside every student.");
// quote.text = "Ha!"; <- エラーになる
var RandomQuote = /** @class */ (function () {
    function RandomQuote() {
        this.explicit = "Home is the nicest word there is.";
        this.implicit = "Home is the nicest word there is.";
        if (Math.random() > 0.5) {
            this.explicit = "We start leaning the minite we're born.";
            //this.implicit = "We start leaning the minite we're born."; <- エラーになる
        }
    }
    return RandomQuote;
}());
var randomQuote = new RandomQuote();
randomQuote.explicit;
randomQuote.implicit;
// 8.3　型としてのクラス
// *************************************************
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.sayHello = function () {
        console.log("Take chances, make mistakes, get messy!");
    };
    return Teacher;
}());
var teacher;
teacher = new Teacher();
// teacher = "Wahoo!"; <- エラーになる
var SchoolBus = /** @class */ (function () {
    function SchoolBus() {
    }
    SchoolBus.prototype.getAbilities = function () {
        return ["magic", "shapeshifting"];
    };
    return SchoolBus;
}());
function withSchoolBus(bus) {
    console.log(bus.getAbilities());
}
withSchoolBus(new SchoolBus());
withSchoolBus({
    getAbilities: function () { return ["transmogrification"]; },
});
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.study = function (hours) {
        for (var i = 0; i < hours; i += 1) {
            console.log("...studying...");
        }
    };
    return Student;
}());
var ReportCard = /** @class */ (function () {
    function ReportCard(grandes) {
        this.grandes = grandes;
    }
    ReportCard.prototype.report = function () {
        return this.grandes.join(", ");
    };
    return ReportCard;
}());
// class AsNumber implements AgeIsNumber,AgeIsNotNumber {
//     age =0;
// } <- エラーになる
// class NotAsNumber implements AgeIsNumber,AgeIsNotNumber {
//     age(){return "";}
// } <- エラーになる
