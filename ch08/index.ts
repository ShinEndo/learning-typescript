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