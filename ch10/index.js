"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CurriedCallback_callback;
// 10　ジェネリック
// *************************************************
function identity(input) {
    return input;
}
const value = identity("abc");
const value2 = identity(123);
const value3 = identity({ quote: "I think your self emerges more clearly over time." });
// 10.1　ジェネリック関数
// *************************************************
function identity2(input) {
    return input;
}
const stringy = identity2("me");
const numeric = identity2(123);
const identity3 = (input) => input;
const value4 = identity3(123);
// 10.1.1　明示的なジェネリック呼び出しの型
// *************************************************
function logWrapper(callback) {
    return (input) => {
        console.log("Input:", input);
        callback(input);
    };
}
// 型：（input: string) => void
const checkLogWrapper = logWrapper((input) => console.log(input.length));
checkLogWrapper("checking");
// 型：（input: unknown) => void
// 型引数を明示的にしない場合、型推論ができない場合がある
// その際、型引数はunknown型になる。結果、型安全性が下がり、エラーの機会が多くなる
// const checkLogWrapper2 = logWrapper((input) => console.log(input.length));
// checkLogWrapper2("checking2");
// 型：（input: string) => void
logWrapper((input) => console.log(input.length));
// logWrapper<string>((input:boolean) => {}); // エラーになる
// 型：（input: string) => void
logWrapper((input) => { });
// 10.1.2　関数の複数の型パラメーター
// *************************************************
function makeTuple(first, second) {
    return [first, second];
}
let tuple = makeTuple(true, "abc");
function makePai(key, value) {
    return { key, value };
}
// OK: どちらの型引数も指定していないので
const makedPai = makePai("abc", 123);
// OK: どちらの型引数も指定しているので
const makedPai2 = makePai("abc", 123);
const makedpai3 = makePai("abc", 123);
let stringBox = {
    inside: "abc",
};
let numberBox = {
    inside: 123,
};
function getLast(node) {
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
// let missingGeneric: CrateLike = {
//     contents: "??",
// }
// 10.3　ジェネリッククラス
// *************************************************
class Secret {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    getValue(key) {
        return this.key === key ? this.value : undefined;
    }
}
const storage = new Secret(12345, "luggage");
const storageValue = storage.getValue(1987);
console.log(storageValue);
// 10.3.1　明示的なジェネリッククラスの型
// *************************************************
class CurriedCallback {
    constructor(callback) {
        _CurriedCallback_callback.set(this, void 0);
        __classPrivateFieldSet(this, _CurriedCallback_callback, (input) => {
            console.log("Input:", input);
            callback(input);
        }, "f");
    }
    call(input) {
        __classPrivateFieldGet(this, _CurriedCallback_callback, "f").call(this, input);
    }
}
_CurriedCallback_callback = new WeakMap();
// 型：CurriedCallback<string>
const callbackString = new CurriedCallback((input) => console.log(input.length));
callbackString.call('text');
// 型：CurriedCallback<unknown>
// 引数の型がunknownのため、引数inputでlengthプロパティが使えるかわからない → 結果、エラーになる
// const callbackUnknown = new CurriedCallback(input => console.log(input.length));
// 明示的にジェネリックの型を指定するとエラーにならない
new CurriedCallback(input => console.log(input.length));
// 明示的にジェネリックの型を指定した場合、ジェネリックの型と一致しない場所でエラーになる
// new CurriedCallback<string>((input:boolean) => console.log(input));
// 10.3.2　ジェネリッククラスの拡張
// *************************************************
class Quote10 {
    constructor(lines) {
        this.lines = lines;
    }
}
class SpokenQuopte10 extends Quote10 {
    speak() {
        console.log(this.lines.join("\n"));
    }
}
const quote10String = new Quote10("The only real failure is the failure to try.").lines;
const quote10Number = new Quote10([4, 5, 6, 7, 8, 9, 10]).lines;
// extendsで継承した際の型と違うためエラーになる
// const spokenQuote10 = new SpokenQuopte10([4,5,6,7,8,9,10]);
class AttributedQuote10 extends Quote10 {
    constructor(value, speaker) {
        super(value);
        this.speaker = speaker;
    }
}
const attributedQoute10 = new AttributedQuote10("The roadvto success is always under construction.", "Lily Tomlin");
class MoviePart {
    constructor(role, speaking) {
        this.role = role;
        this.speaking = speaking;
    }
}
const part = new MoviePart("Mirinda Priestly", true);
console.log(part.role, part.speaking);
// インターフェースの型と違う型でclassを作成使用した場合、エラーになる
// class IncorrectExtension implements ActingCredit<string> {
//     role: boolean;
// }
// 10.3.4　メソッドのジェネリック
// *************************************************
class CreatePairFactory {
    constructor(key) {
        this.key = key;
    }
    createPair(value) {
        return { key: this.key, value };
    }
}
// 型：CreatePairFactory<string>
const factory = new CreatePairFactory("role");
// 型：{key: string, value: number }
const numberPair = factory.createPair(10);
console.log(numberPair);
// 型：{key: string, value:string }
const stringPair = factory.createPair("Sophie");
console.log(stringPair);
// 10.3.5　クラスの静的メンバーのジェネリック
// *************************************************
class BothLogger {
    instnceLog(value) {
        console.log(value);
        return value;
    }
    static staticLog(value) {
        // let fromInstance: OnInstance;
        console.log(value);
        return value;
    }
}
const logger = new BothLogger;
logger.instnceLog([1, 2, 3]);
BothLogger.staticLog([false, true]);
BothLogger.staticLog("You can't change the music of your soul.");
let creator;
creator = text => text.length;
function handleResult(result) {
    if (result.succeeded) {
        console.log(`We did it! ${result.data}`);
    }
    else {
        console.log(`Awwww... ${result.error}`);
    }
    // return result.data;
}
let explicit = { value: 123 };
let implicit = { value: "Be yourself. The world worships the original." };
let allExplicit = {
    key: "rating",
    value: 10
};
let oneDefalut = {
    key: "rating",
    // value: 123,
    value: "ten",
};
// let firstMissing: KeyValuePair = {
//     key: "rating",
//     value: 10,
// }
function inTheEnd() { }
function logWithLength(input) {
    console.log(`Length: ${input.length}`);
    return input;
}
logWithLength("No one can figure out your worth but you.");
logWithLength([false, true]);
logWithLength({ length: 123 });
// logWithLength(new Date());
// logWithLength(true);
// 10.6.1　keyofと制約付き型パラメーター
// *************************************************
function get(container, key) {
    return container[key];
}
const roles = {
    favorite: "Fargo",
    others: ["Almost Famous", "Burn After Reading", "Nomadland"],
};
const favorite = get(roles, "favorite");
const others = get(roles, "others");
// const missing = get(roles,"extras");
function get2(container, key) {
    return container[key];
}
const found = get2(roles, "favorite");
// 10.7　Promise
// *************************************************
// 10.7.1　Promiseの作成
// *************************************************
class PromiseLike10 {
    constructor(executor) { }
}
// 型：Promise<unknown>
const resolvesUnknown = new Promise(resolve => {
    setTimeout(() => resolve("Done!"), 1000);
});
// 型：Promise<string>
const resolvesString = new Promise(resolve => {
    setTimeout(() => resolve("Done!"), 1000);
});
// 型：Promise<string>
const textEventually = new Promise(resolve => {
    setTimeout(() => resolve("Done!"), 1000);
});
// 型：Promise<numbr>
const numberEventually = textEventually.then(text => text.length);
// 10.7.2　async関数
// *************************************************
// 型：(text:string) => Promise<number>
function lengthAfterSecond(text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise(resolve => setTimeout(resolve, 1000));
        return text.length;
    });
}
// 型：(text:string) => Promise<number>
function lengthImmediately(text) {
    return __awaiter(this, void 0, void 0, function* () {
        return text.length;
    });
}
function givesPromiseForString() {
    return __awaiter(this, void 0, void 0, function* () {
        return "Done!";
    });
}
// async function givesString(): string {
//     return "Done!"; 
// }
// 10.8　ジェネリックを適切に使う
// *************************************************
// 10.8.1　ジェネリックの黄金律
// *************************************************
function logInput(input) {
    console.log("Hi!", input);
}
// 10.8.2　ジェネリックの命名規則
// *************************************************
// Memo
// -------------------------------------------------
// 状態管理のライブラリでは<S>が多い
// データ構造を表すジェネリックは<K,V>が多い
// Bad Practice | 変数や型が何を意味しているのかわからない
function BadLabelBox(l, v) { }
// Good Practice | 変数や型が何を意味しているのかわかりやすい
function GoodlabelBox(label, value) { }
