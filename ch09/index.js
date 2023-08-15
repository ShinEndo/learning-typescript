var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 9　型修飾子
// *************************************************
// 9.1　トップ型
// *************************************************
// 9.1.1　再び any
// *************************************************
var anyValue;
anyValue = "lucille Ball";
anyValue = 123;
console.log(anyValue);
function greetComedian(name) {
    console.log("Announcing ".concat(name.toUpperCase(), "!"));
}
greetComedian('Bea Arthur');
// TypeScriptで型エラーにならないが、JavaScriptで実行するとクラッシュする
// greetComedian({name: "Bea Arthur"});
// 9.1.2　unknown
// *************************************************
// unknown型のため、型エラーを報告してくれる
// function greetComedian2(name: unknown) {
//     console.log(`Announcing ${name.toUpperCase()}!`);
// }
function greetComedian2(name) {
    if (typeof name === "string") {
        console.log("Announcing ".concat(name.toUpperCase(), "!"));
    }
    else {
        console.log("Well, I'm off.");
    }
}
greetComedian2('Bea Arthur');
// TypeScriptで型エラーにならず、JavaScriptでもクラッシュしない（elseでクラッシュを事前に防いでいる）
greetComedian2({ name: "Bea Arthur" });
// 9.2　型述語
// *************************************************
function isNumberOrString(value) {
    return ['number', 'string'].includes(typeof value);
}
function logValueIfExists(value) {
    if (isNumberOrString(value)) {
        // valueの型が絞られていないため、エラーになる
        // value.toString();
    }
    else {
        console.log("Value does not exist", value);
    }
}
function isNumberOrString2(value) {
    return ['number', 'string'].includes(typeof value);
}
function logValueIfExists2(value) {
    if (isNumberOrString2(value)) {
        value.toString();
    }
    else {
        console.log("Value does not exist", value);
    }
}
function isStandupComedian(value) {
    return 'routine' in value;
}
function workWithComedian(value) {
    if (isStandupComedian(value)) {
        console.log(value.routine);
    }
    // 絞り込みができていないので、エラーになる
    // console.log(value.routine);
}
function isLongString(input) {
    return !!(input && input.length > 7);
}
function workWithText(text) {
    if (isLongString(text)) {
        console.log("Long text:", text.length);
    }
    else {
        // 複雑な型述語のため、予期せぬundefined型によるエラーになる
        // console.log("Short text:", text?.length);
    }
}
workWithText("test test test");
workWithText("test");
function getRating(ratings, key) {
    // TypeScriptの設定が厳格な場合、エラーになる
    return ratings[key];
}
var ratings = { audience: 77, critics: 84 };
console.log(getRating(ratings, 'audience'));
console.log(getRating(ratings, 'not valid')); // コンパイルは通るけど、不正な値
function getRating2(ratings, key) {
    return ratings[key];
}
var ratings2 = { audience: 77, critics: 84 };
console.log(getRating2(ratings2, 'audience'));
// console.log(getRating2(ratings2, 'not valid')); <- エラーになる
// 「keyof」によって、すべてのキーの合併型が簡潔に表現できる！
function getRatingKeyof(ratings, key) {
    return ratings[key];
}
var ratings3 = { audience: 77, critics: 84 };
console.log(getRatingKeyof(ratings2, 'audience'));
// console.log(getRatingKeyof(ratings2, 'not valid')); <- エラーになる
// 9.3.2　typeof
// *************************************************
var original = {
    medium: "movie",
    title: "Mean Girls",
};
var adaptation;
if (Math.random() > 0.5) {
    adaptation = __assign(__assign({}, original), { medium: "play" });
}
else {
    // adaptation = {...original,medium:2};
}
// 9.3.2.1　keyof typeof
// *************************************************
var ratings4 = {
    imdb: 8.4,
    metacritic: 82,
};
function logRating(key) {
    console.log(ratings4[key]);
}
logRating('imdb');
// logRating('invalid');
// 9.4　型アサーション
// *************************************************
var rawData = "[\"grace\", \"frankie\"]";
var data = JSON.parse(rawData);
var data2 = JSON.parse(rawData);
var data3 = JSON.parse(rawData);
var data4 = JSON.parse(rawData);
// ※ 型アサーションを使用すると、全く関係ない型に再定義できてしまう
var invalidData2 = JSON.parse(rawData);
var invalidData3 = JSON.parse(rawData);
var invalidData4 = JSON.parse(rawData);
var invalidData5 = JSON.parse(rawData);
