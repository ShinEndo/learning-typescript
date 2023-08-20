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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
// 10.3.4　メソッドのジェネリック
// *************************************************
var CreatePairFactory = /** @class */ (function () {
    function CreatePairFactory(key) {
        this.key = key;
    }
    CreatePairFactory.prototype.createPair = function (value) {
        return { key: this.key, value: value };
    };
    return CreatePairFactory;
}());
// 型：CreatePairFactory<string>
var factory = new CreatePairFactory("role");
// 型：{key: string, value: number }
var numberPair = factory.createPair(10);
console.log(numberPair);
// 型：{key: string, value:string }
var stringPair = factory.createPair("Sophie");
console.log(stringPair);
// 10.3.5　クラスの静的メンバーのジェネリック
// *************************************************
var BothLogger = /** @class */ (function () {
    function BothLogger() {
    }
    BothLogger.prototype.instnceLog = function (value) {
        console.log(value);
        return value;
    };
    BothLogger.staticLog = function (value) {
        // let fromInstance: OnInstance;
        console.log(value);
        return value;
    };
    return BothLogger;
}());
var logger = new BothLogger;
logger.instnceLog([1, 2, 3]);
BothLogger.staticLog([false, true]);
BothLogger.staticLog("You can't change the music of your soul.");
var creator;
creator = function (text) { return text.length; };
function handleResult(result) {
    if (result.succeeded) {
        console.log("We did it! ".concat(result.data));
    }
    else {
        console.log("Awwww... ".concat(result.error));
    }
    // return result.data;
}
var explicit = { value: 123 };
var implicit = { value: "Be yourself. The world worships the original." };
var allExplicit = {
    key: "rating",
    value: 10
};
var oneDefalut = {
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
    console.log("Length: ".concat(input.length));
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
var roles = {
    favorite: "Fargo",
    others: ["Almost Famous", "Burn After Reading", "Nomadland"],
};
var favorite = get(roles, "favorite");
var others = get(roles, "others");
// const missing = get(roles,"extras");
function get2(container, key) {
    return container[key];
}
var found = get2(roles, "favorite");
// 10.7　Promise
// *************************************************
// 10.7.1　Promiseの作成
// *************************************************
var PromiseLike10 = /** @class */ (function () {
    function PromiseLike10(executor) {
    }
    return PromiseLike10;
}());
// 型：Promise<unknown>
var resolvesUnknown = new Promise(function (resolve) {
    setTimeout(function () { return resolve("Done!"); }, 1000);
});
// 型：Promise<string>
var resolvesString = new Promise(function (resolve) {
    setTimeout(function () { return resolve("Done!"); }, 1000);
});
// 型：Promise<string>
var textEventually = new Promise(function (resolve) {
    setTimeout(function () { return resolve("Done!"); }, 1000);
});
// 型：Promise<numbr>
var numberEventually = textEventually.then(function (text) { return text.length; });
// 10.7.2　async関数
// *************************************************
// 型：(text:string) => Promise<number>
function lengthAfterSecond(text) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, text.length];
            }
        });
    });
}
// 型：(text:string) => Promise<number>
function lengthImmediately(text) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, text.length];
        });
    });
}
function givesPromiseForString() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, "Done!"];
        });
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
