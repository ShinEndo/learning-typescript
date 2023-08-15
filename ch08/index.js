var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
var _Base_truePrivate;
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
// 8.5　クラスの拡張
// *************************************************
var Teacher2 = /** @class */ (function () {
    function Teacher2() {
    }
    Teacher2.prototype.teach = function () {
        console.log("The surest test of discipline is its absence");
    };
    return Teacher2;
}());
var StudentTeacher = /** @class */ (function (_super) {
    __extends(StudentTeacher, _super);
    function StudentTeacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StudentTeacher.prototype.learn = function () {
        console.log("I cannot afford the luxury of a closed mind.");
    };
    return StudentTeacher;
}(Teacher2));
var teacher2 = new StudentTeacher();
teacher2.teach();
teacher2.learn();
// teacher2.other(); <- エラーになる
// 8.5.1　クラスの拡張の割り当て可能性
// *************************************************
var Lesson = /** @class */ (function () {
    function Lesson(subject) {
        this.subject = subject;
    }
    return Lesson;
}());
var OnlineLesson = /** @class */ (function (_super) {
    __extends(OnlineLesson, _super);
    function OnlineLesson(subject, url) {
        var _this = _super.call(this, subject) || this;
        _this.url = url;
        return _this;
    }
    return OnlineLesson;
}(Lesson));
var lesson;
lesson = new Lesson("coding");
lesson = new OnlineLesson("coding", "oreilly.com");
var online;
online = new OnlineLesson("coding", "oreilly.com");
// online = new Lesson("coding"); <- エラーになる
var PastGrandes = /** @class */ (function () {
    function PastGrandes() {
        this.grandes = [];
    }
    return PastGrandes;
}());
var LabeledPastGrndes = /** @class */ (function (_super) {
    __extends(LabeledPastGrndes, _super);
    function LabeledPastGrndes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LabeledPastGrndes;
}(PastGrandes));
var subClass;
subClass = new LabeledPastGrndes();
subClass = new PastGrandes();
// 8.5.2　オーバーライドされたコンストラクター
// *************************************************
var GradeAnnouncer = /** @class */ (function () {
    function GradeAnnouncer(grade) {
        this.message = grade <= 65 ? "Maybe next time ..." : "You pass!";
    }
    return GradeAnnouncer;
}());
var PassingAnnouncer = /** @class */ (function (_super) {
    __extends(PassingAnnouncer, _super);
    function PassingAnnouncer() {
        return _super.call(this, 100) || this;
    }
    return PassingAnnouncer;
}(GradeAnnouncer));
var FailingAnnouncer = /** @class */ (function (_super) {
    __extends(FailingAnnouncer, _super);
    function FailingAnnouncer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FailingAnnouncer;
}(GradeAnnouncer));
var GradesTally = /** @class */ (function () {
    function GradesTally() {
        this.grades = [];
    }
    GradesTally.prototype.addGrades = function () {
        var _a;
        var grades = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            grades[_i] = arguments[_i];
        }
        (_a = this.grades).push.apply(_a, grades);
        return this.grades.length;
    };
    return GradesTally;
}());
// サブクラスのコンストラクターは、thisやsuperにアクセスする前にベースのコンストラクターを呼ぶ必要がある！
// ベースのコンストラクターを呼ぶために、super()を使用する！
var ContinuedGradesTally = /** @class */ (function (_super) {
    __extends(ContinuedGradesTally, _super);
    function ContinuedGradesTally(previousGrades) {
        var _this = _super.call(this) || this;
        _this.grades = __spreadArray([], previousGrades, true);
        // super();
        console.log("Starting with length, ".concat(_this.grades.length));
        return _this;
    }
    return ContinuedGradesTally;
}(GradesTally));
// 8.5.3　オーバーライドされたメソッド
// *************************************************
var GradeCounter = /** @class */ (function () {
    function GradeCounter() {
    }
    GradeCounter.prototype.countGrades = function (grades, letter) {
        return grades.filter(function (grade) { return grade === letter; }).length;
    };
    return GradeCounter;
}());
var FailureCounter = /** @class */ (function (_super) {
    __extends(FailureCounter, _super);
    function FailureCounter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FailureCounter.prototype.countGrades = function (grades) {
        return _super.prototype.countGrades.call(this, grades, "F");
    };
    return FailureCounter;
}(GradeCounter));
// メソッドのオーバーライドに関するエラー例
// class AnyFailureChecker extends GradeCounter {
//     countGrades(grades: string[]) {
//         return super.countGrades(grades,"F") !== 0;
//     }
// }
// const counter: GradeCounter = new AnyFailureChecker();
// const count = counter.countGrades(["A","C","F"], "D");
// console.log(count);
// 8.5.4　オーバーライドされたプロパティ
// *************************************************
var Assingment = /** @class */ (function () {
    function Assingment() {
    }
    return Assingment;
}());
var GradedAssingment = /** @class */ (function (_super) {
    __extends(GradedAssingment, _super);
    function GradedAssingment(grade) {
        var _this = _super.call(this) || this;
        _this.grade = grade;
        return _this;
    }
    return GradedAssingment;
}(Assingment));
var NumericGrade = /** @class */ (function () {
    function NumericGrade() {
        this.value = 0;
    }
    return NumericGrade;
}());
// プロパティのオーバーライドに関するエラー例
// class VagueGrade extends NumericGrade {
//     value = Math.random() > 0.5 ? 1 : "...";
// }
// const instance:NumericGrade = new VagueGrade();
// console.log(instance.value);
// 8.6　抽象クラス
// *************************************************
var School = /** @class */ (function () {
    function School(name) {
        this.name = name;
    }
    return School;
}());
var Preschool = /** @class */ (function (_super) {
    __extends(Preschool, _super);
    function Preschool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Preschool.prototype.getStudentTypes = function () {
        return ["preschooler"];
    };
    return Preschool;
}(School));
// abstract メソッドを再定義しないとエラーになる
// class Absence extends School{}
var school;
school = new Preschool("Sunnyside Daycare");
// abstract classではインスタンス化できない
// school = new School("somewhere else");
// 8.7　メンバーの可視性
// *************************************************
var Base = /** @class */ (function () {
    function Base() {
        this.isPublicImplicit = 0;
        this.isPublicExplicit = 1;
        this.isProtected = 2;
        this.isPrivate = 3;
        _Base_truePrivate.set(this, 4);
    }
    return Base;
}());
_Base_truePrivate = new WeakMap();
var Subclass = /** @class */ (function (_super) {
    __extends(Subclass, _super);
    function Subclass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Subclass.prototype.examples = function () {
        this.isPublicImplicit;
        this.isPublicExplicit;
        this.isProtected;
        // privateの場合、サブクラスからはアクセスできない
        // this.isPrivate;
        // private識別子が付与されているので、サブクラスからはアクセスできない
        // this.#truePrivate;
    };
    return Subclass;
}(Base));
new Subclass().isPublicImplicit;
new Subclass().isPublicExplicit;
// protectedの場合、インスタンスからはアクセスできない
// new Subclass().isProtected;
// privateの場合、インスタンスからはアクセスできない
// new Subclass().isPrivate;
var TwoKeywords = /** @class */ (function () {
    function TwoKeywords() {
        this.name = "Anne Sullivan";
    }
    TwoKeywords.prototype.log = function () {
        console.log(this.name);
    };
    return TwoKeywords;
}());
var two = new TwoKeywords();
// two.name = "Savitribai Phule";
// 8.8　静的フィールド修飾子
// *************************************************
var Question = /** @class */ (function () {
    function Question() {
    }
    Question.prototype.guess = function (getAnswer) {
        var answer = getAnswer(Question.prompt);
        if (answer === Question.answer) {
            console.log("You got it!");
        }
        else {
            console.log("Try again...");
        }
    };
    Question.answer = "bash";
    Question.prompt = "What's an ogre's favorite programing language?";
    return Question;
}());
// Question.answer:
