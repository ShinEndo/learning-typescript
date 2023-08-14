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

