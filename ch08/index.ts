// 8　クラス
// *************************************************
class Greeter {
    greet(name:string) {
        console.log(`${name}, do your stuff!`)
    }
}

new Greeter().greet("Miss Frizzle");

// new Greeter().greet(); <- エラーになる

class Greeted {
    constructor(message: string) {
        console.log(`As I always say: ${message}`);
    }
}

new Greeted("take chances, make mistakes, get messy");

// new Greeted(); <- エラーになる

// 8.2　クラスのプロパティ
// *************************************************
class FieldTrip {
    destination: string;

    constructor(destination: string) {
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
    myMethod(){}
}
console.log("□ クラスメソッドの比較 ---------------------");
console.log(new WithMethod().myMethod === new WithMethod().myMethod);

class WithProperty {
    myProperty = () => {};

}
console.log("□ クラスプロパティの比較 ---------------------");
console.log(new WithProperty().myProperty === new WithProperty().myProperty);

class WithPropertyParameters {
    takesParameters = (input:boolean) => input ? "Yes" : "No";
}

const instance = new WithPropertyParameters();
instance.takesParameters(true);
// instance.takesParameters(123); <- エラーになる

// 8.2.2　初期化チェック
// *************************************************
class WithValue {
    immediate = 0;
    later: number;
    mayBeUndefined: number | undefined;
    // unused: number; <- エラーになる

    constructor() {
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
    pending!: string[];

    initialize(pending: string[]) {
        this.pending = pending;
    }

    next() {
        return this.pending.pop();
    }
}

const activities = new ActivitiesQueue();
activities.initialize(['eat','sleep','learn']);
activities.next();

// 8.2.3　オプションプロパティ
// *************************************************
class MissingInitializer2 {
    property?: string;
}

new MissingInitializer2().property?.length;
// new MissingInitializer2().property.length; <- エラーになる

// 8.2.4　読み取り専用プロパティ
// *************************************************
class Quote {
    readonly text: string;

    constructor(text: string) {
        this.text = text;
    }

    emphasize() {
        // this.text += "!"; <- エラーになる
    }
}

const quote = new Quote("There is a brilliant child locked inside every student.");
// quote.text = "Ha!"; <- エラーになる

class RandomQuote {
    readonly explicit: string = "Home is the nicest word there is.";
    readonly implicit = "Home is the nicest word there is.";

    constructor() {
        if(Math.random() > 0.5) {
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

let teacher: Teacher;

teacher = new Teacher();

// teacher = "Wahoo!"; <- エラーになる

class SchoolBus {
    getAbilities() {
        return ["magic","shapeshifting"];
    }
}

function withSchoolBus(bus: SchoolBus) {
    console.log(bus.getAbilities());
}

withSchoolBus(new SchoolBus());

withSchoolBus({
    getAbilities: () => ["transmogrification"],
});

// withSchoolBus({
//     getAbilities: () => 123,
// }) <- エラーになる

// 8.4　クラスとインターフェース
// *************************************************
interface Learner {
    name: string;
    study(hours: number): void;
}

class Student implements Learner {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    study(hours: number): void {
        for(let i = 0; i < hours; i+=1) {
            console.log("...studying...");
        }
    }
}

// class Slacker implements Learner {
//     name = "Rocky";
// } <- エラーになる

// class Student2 implements Learner {
//     name;
//     study(hours):  {}
// } <- エラーになる

// 8.4.1　複数インターフェースの実装
// *************************************************
interface Granded {
    grandes: number[];
}

interface Reporter {
    report: () => string;
}

class ReportCard implements Granded,Reporter {
    grandes: number[];

    constructor(grandes: number[]) {
        this.grandes = grandes;
    }

    report(){
        return this.grandes.join(", ");
    }
}

// class Empty implements Granded,Reporter {} <- エラーになる

interface AgeIsNumber {
    age: number;
}

interface AgeIsNotNumber {
    age: () => string;
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

const teacher2 =  new StudentTeacher();
teacher2.teach();
teacher2.learn();
// teacher2.other(); <- エラーになる

// 8.5.1　クラスの拡張の割り当て可能性
// *************************************************
class Lesson {
    subject: string;

    constructor(subject: string) {
        this.subject = subject;
    }
}

class OnlineLesson extends Lesson {
    url: string;

    constructor(subject:string,url:string) {
        super(subject);
        this.url = url;
    }
}

let lesson:Lesson;
lesson = new Lesson("coding");
lesson = new OnlineLesson("coding","oreilly.com");

let online: OnlineLesson;
online = new OnlineLesson("coding","oreilly.com");
// online = new Lesson("coding"); <- エラーになる

class PastGrandes {
    grandes: number[] = [];
}

class LabeledPastGrndes extends PastGrandes {
    label?: string;
}

let subClass: LabeledPastGrndes;
subClass = new LabeledPastGrndes();
subClass = new PastGrandes();

// 8.5.2　オーバーライドされたコンストラクター
// *************************************************
class GradeAnnouncer {
    message: string;

    constructor(grade: number) {
        this.message = grade <= 65 ? "Maybe next time ..." : "You pass!";
    }

}

class PassingAnnouncer extends GradeAnnouncer {
    constructor(){
        super(100);
    }
}

class FailingAnnouncer extends GradeAnnouncer {
    // constructor() {} <- エラーになる
}

class GradesTally {
    grades: number[] = [];

    addGrades(...grades: number[]){
        this.grades.push(...grades);
        return this.grades.length;
    }
}

// サブクラスのコンストラクターは、thisやsuperにアクセスする前にベースのコンストラクターを呼ぶ必要がある！
// ベースのコンストラクターを呼ぶために、super()を使用する！
class ContinuedGradesTally extends GradesTally {
    constructor(previousGrades: number[]) {
        super();
        this.grades = [...previousGrades];
        // super();
        console.log(`Starting with length, ${this.grades.length}`);
    }
}

// 8.5.3　オーバーライドされたメソッド
// *************************************************
class GradeCounter {
    countGrades(grades: string[],letter:string){
        return grades.filter(grade => grade === letter).length;
    }
}

class FailureCounter extends GradeCounter {
    countGrades(grades: string[]) {
        return super.countGrades(grades,"F");
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
    grade?: number;
}

class GradedAssingment extends Assingment {
    grade: number;

    constructor(grade:number) {
        super();
        this.grade = grade;
    }
}

class NumericGrade {
    value = 0;
}

// プロパティのオーバーライドに関するエラー例
// class VagueGrade extends NumericGrade {
//     value = Math.random() > 0.5 ? 1 : "...";
// }
// const instance:NumericGrade = new VagueGrade();
// console.log(instance.value);

// 8.6　抽象クラス
// *************************************************
abstract class School {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract getStudentTypes(): string[];
}

class Preschool extends School {
    getStudentTypes(){
        return ["preschooler"];
    }
}

// abstract メソッドを再定義しないとエラーになる
// class Absence extends School{}

let school: School;

school = new Preschool("Sunnyside Daycare");
// abstract classではインスタンス化できない
// school = new School("somewhere else");

