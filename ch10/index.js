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
var value = identity("abc");
var value2 = identity(123);
var value3 = identity({ quote: "I think your self emerges more clearly over time." });
// 10.1　ジェネリック関数
// *************************************************
function identity2(input) {
    return input;
}
var stringy = identity2("me");
var numeric = identity2(123);
var identity3 = function (input) { return input; };
var value4 = identity3(123);
// 10.1.1　明示的なジェネリック呼び出しの型
// *************************************************
function logWrapper(callback) {
    return function (input) {
        console.log("Input:", input);
        callback(input);
    };
}
// 型：（input: string) => void
var checkLogWrapper = logWrapper(function (input) { return console.log(input.length); });
checkLogWrapper("checking");
// 型：（input: unknown) => void
// 型引数を明示的にしない場合、型推論ができない場合がある
// その際、型引数はunknown型になる。結果、型安全性が下がり、エラーの機会が多くなる
// const checkLogWrapper2 = logWrapper((input) => console.log(input.length));
// checkLogWrapper2("checking2");
// 型：（input: string) => void
logWrapper(function (input) { return console.log(input.length); });
// logWrapper<string>((input:boolean) => {}); // エラーになる
// 型：（input: string) => void
logWrapper(function (input) { });
// 10.1.2　関数の複数の型パラメーター
// *************************************************
function makeTuple(first, second) {
    return [first, second];
}
var tuple = makeTuple(true, "abc");
function makePai(key, value) {
    return { key: key, value: value };
}
// OK: どちらの型引数も指定していないので
var makedPai = makePai("abc", 123);
// OK: どちらの型引数も指定しているので
var makedPai2 = makePai("abc", 123);
var makedpai3 = makePai("abc", 123);
var stringBox = {
    inside: "abc",
};
var numberBox = {
    inside: 123,
};
function getLast(node) {
    return node.next ? getLast(node.next) : node.value;
}
// 推論されるValueの型引数：Date
var lastDate = getLast({
    value: new Date("09-13-1993"),
});
// 推論されるValueの型引数：string
var lastFruit = getLast({
    next: {
        value: "banana",
    },
    value: "apple",
});
// 推論されるValueの型引数：number
var lastMismatch = getLast({
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
var Secret = /** @class */ (function () {
    function Secret(key, value) {
        this.key = key;
        this.value = value;
    }
    Secret.prototype.getValue = function (key) {
        return this.key === key ? this.value : undefined;
    };
    return Secret;
}());
var storage = new Secret(12345, "luggage");
var storageValue = storage.getValue(1987);
console.log(storageValue);
// 10.3.1　明示的なジェネリッククラスの型
// *************************************************
var CurriedCallback = /** @class */ (function () {
    function CurriedCallback(callback) {
        _CurriedCallback_callback.set(this, void 0);
        __classPrivateFieldSet(this, _CurriedCallback_callback, function (input) {
            console.log("Input:", input);
            callback(input);
        }, "f");
    }
    CurriedCallback.prototype.call = function (input) {
        __classPrivateFieldGet(this, _CurriedCallback_callback, "f").call(this, input);
    };
    return CurriedCallback;
}());
_CurriedCallback_callback = new WeakMap();
// 型：CurriedCallback<string>
var callbackString = new CurriedCallback(function (input) { return console.log(input.length); });
callbackString.call('text');
// 型：CurriedCallback<unknown>
// 引数の型がunknownのため、引数inputでlengthプロパティが使えるかわからない → 結果、エラーになる
// const callbackUnknown = new CurriedCallback(input => console.log(input.length));
// 明示的にジェネリックの型を指定するとエラーにならない
new CurriedCallback(function (input) { return console.log(input.length); });
// 明示的にジェネリックの型を指定した場合、ジェネリックの型と一致しない場所でエラーになる
// new CurriedCallback<string>((input:boolean) => console.log(input));
// 10.3.2　ジェネリッククラスの拡張
// *************************************************
var Quote10 = /** @class */ (function () {
    function Quote10(lines) {
        this.lines = lines;
    }
    return Quote10;
}());
var SpokenQuopte10 = /** @class */ (function (_super) {
    __extends(SpokenQuopte10, _super);
    function SpokenQuopte10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpokenQuopte10.prototype.speak = function () {
        console.log(this.lines.join("\n"));
    };
    return SpokenQuopte10;
}(Quote10));
var quote10String = new Quote10("The only real failure is the failure to try.").lines;
var quote10Number = new Quote10([4, 5, 6, 7, 8, 9, 10]).lines;
// extendsで継承した際の型と違うためエラーになる
// const spokenQuote10 = new SpokenQuopte10([4,5,6,7,8,9,10]);
var AttributedQuote10 = /** @class */ (function (_super) {
    __extends(AttributedQuote10, _super);
    function AttributedQuote10(value, speaker) {
        var _this = _super.call(this, value) || this;
        _this.speaker = speaker;
        return _this;
    }
    return AttributedQuote10;
}(Quote10));
var attributedQoute10 = new AttributedQuote10("The roadvto success is always under construction.", "Lily Tomlin");
var MoviePart = /** @class */ (function () {
    function MoviePart(role, speaking) {
        this.role = role;
        this.speaking = speaking;
    }
    return MoviePart;
}());
var part = new MoviePart("Mirinda Priestly", true);
console.log(part.role, part.speaking);
// インターフェースの型と違う型でclassを作成使用した場合、エラーになる
// class IncorrectExtension implements ActingCredit<string> {
//     role: boolean;
// }
