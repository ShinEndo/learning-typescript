// 10　ジェネリック
// *************************************************
function identity(input) {
    return input;
}

const value = identity("abc");
const value2 = identity(123);
const value3 = identity({quote: "I think your self emerges more clearly over time."});


// 10.1　ジェネリック関数
// *************************************************
function identity2<T>(input:T) {
    return input;
}

const stringy = identity2("me");
const numeric = identity2(123);

const identity3 = <T>(input:T) => input;
const value4 = identity3(123);

// 10.1.1　明示的なジェネリック呼び出しの型
// *************************************************
function logWrapper<Input>(callback: (input:Input)=>void) {
    return (input:Input) => {
        console.log("Input:",input);
        callback(input);
    }
}

// 型：（input: string) => void
const checkLogWrapper = logWrapper((input:string) => console.log(input.length));
checkLogWrapper("checking");

// 型：（input: unknown) => void
// 型引数を明示的にしない場合、型推論ができない場合がある
// その際、型引数はunknown型になる。結果、型安全性が下がり、エラーの機会が多くなる
// const checkLogWrapper2 = logWrapper((input) => console.log(input.length));
// checkLogWrapper2("checking2");

// 型：（input: string) => void
logWrapper<string>((input:string) => console.log(input.length));

// logWrapper<string>((input:boolean) => {}); // エラーになる

// 型：（input: string) => void
logWrapper<string>((input:string) => {});

// 10.1.2　関数の複数の型パラメーター
// *************************************************
function makeTuple<First,Second>(first:First,second:Second) {
    return [first,second] as const;
}

let tuple = makeTuple(true,"abc");

function makePai<Key,Value>(key: Key, value:Value) {
    return {key,value};
}
// OK: どちらの型引数も指定していないので
const makedPai = makePai("abc",123);

// OK: どちらの型引数も指定しているので
const makedPai2 = makePai<string,number>("abc",123);
const makedpai3 = makePai<"abc",123>("abc",123);

// NG: 引数の数よりも少ない数の型引数を指定した場合、エラーになる
// const makedPai4 = makePai<string>("abc",123);

// NG: 引数の数よりも多い数の型引数を指定した場合も同様にエラーになる
// const makedPai5 = makePai<string,number,boolean>("abc",123);

// NG: 型引数と引数の型が違う場合、エラーになる
// const makedpai6 = makePai<number,string>("abc",123);
// const makedpai7 = makePai<"abcd",1234>("abc",123);

// 10.2　ジェネリックインターフェース
// *************************************************
interface Box<T> {
    inside: T;
}

let stringBox: Box<string> = {
    inside: "abc",
};

let numberBox: Box<number> = {
    inside: 123,
};

// ジェネリックの型引数と一致しない場合、エラーになる
// ex)「number」型の型引数を設定しているのに、insedeの型が「boolean」なので
// let incorrectBox: Box<number> = {
//     inside: false,
// };

// 10.2.1　ジェネリックインターフェースの型引数の推論
// *************************************************
interface LinkedNode<Value> {
    next?: LinkedNode<Value>;
    value: Value,
}

function getLast<Value>(node: LinkedNode<Value>): Value {
    return node.next ? getLast(node.next) : node.value;
}

// 推論されるValueの型引数：Date
let lastDate = getLast({
    value: new Date("09-13-1993"),
});

// 推論されるValueの型引数：string
let lastFruit = getLast({
    next: {
        value: "banana",
    },
    value: "apple",
});

// 推論されるValueの型引数：number
let lastMismatch = getLast({
    next: {
        value: 123
    },
    // value: false, // エラーになる
    value: 456,
});

interface CrateLike<T> {
    contents: T;
}

// let missingGeneric: CrateLike = {
//     contents: "??",
// }


// 10.3　ジェネリッククラス
// *************************************************
class Secret<Key,Value> {
    key: Key;
    value: Value;

    constructor(key: Key, value: Value) {
        this.key = key;
        this.value = value;
    }

    getValue(key:Key) : Value | undefined {
        return this.key === key ? this.value : undefined;
    }
}

const storage = new Secret(12345, "luggage");
const storageValue = storage.getValue(1987);
console.log(storageValue);

// 10.3.1　明示的なジェネリッククラスの型
// *************************************************
class CurriedCallback<Input> {
    #callback: (input: Input) => void;

    constructor(callback: (input:Input) => void ) {
        this.#callback = (input: Input) => {
            console.log("Input:", input);
            callback(input);
        }
    }

    call(input: Input) {
        this.#callback(input);
    }
}

// 型：CurriedCallback<string>
const callbackString = new CurriedCallback((input:string)=>console.log(input.length));
callbackString.call('text');

// 型：CurriedCallback<unknown>
// 引数の型がunknownのため、引数inputでlengthプロパティが使えるかわからない → 結果、エラーになる
// const callbackUnknown = new CurriedCallback(input => console.log(input.length));
// 明示的にジェネリックの型を指定するとエラーにならない
new CurriedCallback<string>(input => console.log(input.length));

// 明示的にジェネリックの型を指定した場合、ジェネリックの型と一致しない場所でエラーになる
// new CurriedCallback<string>((input:boolean) => console.log(input));

// 10.3.2　ジェネリッククラスの拡張
// *************************************************
class Quote10<T> {
    lines: T;

    constructor(lines: T) {
        this.lines = lines;
    }
}

class SpokenQuopte10 extends Quote10<string[]> {
    speak() {
        console.log(this.lines.join("\n"));
    }
}

const quote10String = new Quote10("The only real failure is the failure to try.").lines;
const quote10Number = new Quote10([4,5,6,7,8,9,10]).lines;

// extendsで継承した際の型と違うためエラーになる
// const spokenQuote10 = new SpokenQuopte10([4,5,6,7,8,9,10]);

class AttributedQuote10<Value> extends Quote10<Value> {
    speaker: string;

    constructor(value: Value, speaker: string) {
        super(value);
        this.speaker = speaker;
    }
}
const attributedQoute10 = new AttributedQuote10("The roadvto success is always under construction.", "Lily Tomlin");

