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

