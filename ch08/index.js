"use strict";
var _a;
var _Base_truePrivate;
// 8　クラス
// *************************************************
class Greeter {
    greet(name) {
        console.log(`${name}, do your stuff!`);
    }
}
new Greeter().greet("Miss Frizzle");
// new Greeter().greet(); <- エラーになる
class Greeted {
    constructor(message) {
        console.log(`As I always say: ${message}`);
    }
}
new Greeted("take chances, make mistakes, get messy");
// new Greeted(); <- エラーになる
// 8.2　クラスのプロパティ
// *************************************************
class FieldTrip {
    constructor(destination) {
        this.destination = destination;
        console.log(`We're going to ${this.destination}`);
        // this.nonexistent = destination; <- エラーになる
    }
}
const trip = new FieldTrip("planetarium");
trip.destination;
// trip.noneexistent; <- エラーになる
// 8.2.1　関数プロパティ
// *************************************************
class WithMethod {
    myMethod() { }
}
console.log("□ クラスメソッドの比較 ---------------------");
console.log(new WithMethod().myMethod === new WithMethod().myMethod);
class WithProperty {
    constructor() {
        this.myProperty = () => { };
    }
}
console.log("□ クラスプロパティの比較 ---------------------");
console.log(new WithProperty().myProperty === new WithProperty().myProperty);
class WithPropertyParameters {
    constructor() {
        this.takesParameters = (input) => input ? "Yes" : "No";
    }
}
const instance = new WithPropertyParameters();
instance.takesParameters(true);
// instance.takesParameters(123); <- エラーになる
// 8.2.2　初期化チェック
// *************************************************
class WithValue {
    // unused: number; <- エラーになる
    constructor() {
        this.immediate = 0;
        this.later = 1;
    }
}
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
class ActivitiesQueue {
    initialize(pending) {
        this.pending = pending;
    }
    next() {
        return this.pending.pop();
    }
}
const activities = new ActivitiesQueue();
activities.initialize(['eat', 'sleep', 'learn']);
activities.next();
// 8.2.3　オプションプロパティ
// *************************************************
class MissingInitializer2 {
}
(_a = new MissingInitializer2().property) === null || _a === void 0 ? void 0 : _a.length;
// new MissingInitializer2().property.length; <- エラーになる
// 8.2.4　読み取り専用プロパティ
// *************************************************
class Quote {
    constructor(text) {
        this.text = text;
    }
    emphasize() {
        // this.text += "!"; <- エラーになる
    }
}
const quote = new Quote("There is a brilliant child locked inside every student.");
// quote.text = "Ha!"; <- エラーになる
class RandomQuote {
    constructor() {
        this.explicit = "Home is the nicest word there is.";
        this.implicit = "Home is the nicest word there is.";
        if (Math.random() > 0.5) {
            this.explicit = "We start leaning the minite we're born.";
            //this.implicit = "We start leaning the minite we're born."; <- エラーになる
        }
    }
}
const randomQuote = new RandomQuote();
randomQuote.explicit;
randomQuote.implicit;
// 8.3　型としてのクラス
// *************************************************
class Teacher {
    sayHello() {
        console.log("Take chances, make mistakes, get messy!");
    }
}
let teacher;
teacher = new Teacher();
// teacher = "Wahoo!"; <- エラーになる
class SchoolBus {
    getAbilities() {
        return ["magic", "shapeshifting"];
    }
}
function withSchoolBus(bus) {
    console.log(bus.getAbilities());
}
withSchoolBus(new SchoolBus());
withSchoolBus({
    getAbilities: () => ["transmogrification"],
});
class Student {
    constructor(name) {
        this.name = name;
    }
    study(hours) {
        for (let i = 0; i < hours; i += 1) {
            console.log("...studying...");
        }
    }
}
class ReportCard {
    constructor(grandes) {
        this.grandes = grandes;
    }
    report() {
        return this.grandes.join(", ");
    }
}
// class AsNumber implements AgeIsNumber,AgeIsNotNumber {
//     age =0;
// } <- エラーになる
// class NotAsNumber implements AgeIsNumber,AgeIsNotNumber {
//     age(){return "";}
// } <- エラーになる
// 8.5　クラスの拡張
// *************************************************
class Teacher2 {
    teach() {
        console.log("The surest test of discipline is its absence");
    }
}
class StudentTeacher extends Teacher2 {
    learn() {
        console.log("I cannot afford the luxury of a closed mind.");
    }
}
const teacher2 = new StudentTeacher();
teacher2.teach();
teacher2.learn();
// teacher2.other(); <- エラーになる
// 8.5.1　クラスの拡張の割り当て可能性
// *************************************************
class Lesson {
    constructor(subject) {
        this.subject = subject;
    }
}
class OnlineLesson extends Lesson {
    constructor(subject, url) {
        super(subject);
        this.url = url;
    }
}
let lesson;
lesson = new Lesson("coding");
lesson = new OnlineLesson("coding", "oreilly.com");
let online;
online = new OnlineLesson("coding", "oreilly.com");
// online = new Lesson("coding"); <- エラーになる
class PastGrandes {
    constructor() {
        this.grandes = [];
    }
}
class LabeledPastGrndes extends PastGrandes {
}
let subClass;
subClass = new LabeledPastGrndes();
subClass = new PastGrandes();
// 8.5.2　オーバーライドされたコンストラクター
// *************************************************
class GradeAnnouncer {
    constructor(grade) {
        this.message = grade <= 65 ? "Maybe next time ..." : "You pass!";
    }
}
class PassingAnnouncer extends GradeAnnouncer {
    constructor() {
        super(100);
    }
}
class FailingAnnouncer extends GradeAnnouncer {
}
class GradesTally {
    constructor() {
        this.grades = [];
    }
    addGrades(...grades) {
        this.grades.push(...grades);
        return this.grades.length;
    }
}
// サブクラスのコンストラクターは、thisやsuperにアクセスする前にベースのコンストラクターを呼ぶ必要がある！
// ベースのコンストラクターを呼ぶために、super()を使用する！
class ContinuedGradesTally extends GradesTally {
    constructor(previousGrades) {
        super();
        this.grades = [...previousGrades];
        // super();
        console.log(`Starting with length, ${this.grades.length}`);
    }
}
// 8.5.3　オーバーライドされたメソッド
// *************************************************
class GradeCounter {
    countGrades(grades, letter) {
        return grades.filter(grade => grade === letter).length;
    }
}
class FailureCounter extends GradeCounter {
    countGrades(grades) {
        return super.countGrades(grades, "F");
    }
}
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
class Assingment {
}
class GradedAssingment extends Assingment {
    constructor(grade) {
        super();
        this.grade = grade;
    }
}
class NumericGrade {
    constructor() {
        this.value = 0;
    }
}
// プロパティのオーバーライドに関するエラー例
// class VagueGrade extends NumericGrade {
//     value = Math.random() > 0.5 ? 1 : "...";
// }
// const instance:NumericGrade = new VagueGrade();
// console.log(instance.value);
// 8.6　抽象クラス
// *************************************************
class School {
    constructor(name) {
        this.name = name;
    }
}
class Preschool extends School {
    getStudentTypes() {
        return ["preschooler"];
    }
}
// abstract メソッドを再定義しないとエラーになる
// class Absence extends School{}
let school;
school = new Preschool("Sunnyside Daycare");
// abstract classではインスタンス化できない
// school = new School("somewhere else");
// 8.7　メンバーの可視性
// *************************************************
class Base {
    constructor() {
        this.isPublicImplicit = 0;
        this.isPublicExplicit = 1;
        this.isProtected = 2;
        this.isPrivate = 3;
        _Base_truePrivate.set(this, 4);
    }
}
_Base_truePrivate = new WeakMap();
class Subclass extends Base {
    examples() {
        this.isPublicImplicit;
        this.isPublicExplicit;
        this.isProtected;
        // privateの場合、サブクラスからはアクセスできない
        // this.isPrivate;
        // private識別子が付与されているので、サブクラスからはアクセスできない
        // this.#truePrivate;
    }
}
new Subclass().isPublicImplicit;
new Subclass().isPublicExplicit;
// protectedの場合、インスタンスからはアクセスできない
// new Subclass().isProtected;
// privateの場合、インスタンスからはアクセスできない
// new Subclass().isPrivate;
class TwoKeywords {
    constructor() {
        this.name = "Anne Sullivan";
    }
    log() {
        console.log(this.name);
    }
}
const two = new TwoKeywords();
// two.name = "Savitribai Phule";
// 8.8　静的フィールド修飾子
// *************************************************
class Question {
    guess(getAnswer) {
        const answer = getAnswer(Question.prompt);
        if (answer === Question.answer) {
            console.log("You got it!");
        }
        else {
            console.log("Try again...");
        }
    }
}
Question.answer = "bash";
Question.prompt = "What's an ogre's favorite programing language?";
// Question.answer:
