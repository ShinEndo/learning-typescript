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

