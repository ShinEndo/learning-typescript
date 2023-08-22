"use strict";
// 9　型修飾子
// *************************************************
// 9.1　トップ型
// *************************************************
// 9.1.1　再び any
// *************************************************
let anyValue;
anyValue = "lucille Ball";
anyValue = 123;
console.log(anyValue);
function greetComedian(name) {
    console.log(`Announcing ${name.toUpperCase()}!`);
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
        console.log(`Announcing ${name.toUpperCase()}!`);
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
const ratings = { audience: 77, critics: 84 };
console.log(getRating(ratings, 'audience'));
console.log(getRating(ratings, 'not valid')); // コンパイルは通るけど、不正な値
function getRating2(ratings, key) {
    return ratings[key];
}
const ratings2 = { audience: 77, critics: 84 };
console.log(getRating2(ratings2, 'audience'));
// console.log(getRating2(ratings2, 'not valid')); <- エラーになる
// 「keyof」によって、すべてのキーの合併型が簡潔に表現できる！
function getRatingKeyof(ratings, key) {
    return ratings[key];
}
const ratings3 = { audience: 77, critics: 84 };
console.log(getRatingKeyof(ratings2, 'audience'));
// console.log(getRatingKeyof(ratings2, 'not valid')); <- エラーになる
// 9.3.2　typeof
// *************************************************
const original = {
    medium: "movie",
    title: "Mean Girls",
};
let adaptation;
if (Math.random() > 0.5) {
    adaptation = Object.assign(Object.assign({}, original), { medium: "play" });
}
else {
    // adaptation = {...original,medium:2};
}
// 9.3.2.1　keyof typeof
// *************************************************
const ratings4 = {
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
const rawData = `["grace", "frankie"]`;
const data = JSON.parse(rawData);
const data2 = JSON.parse(rawData);
const data3 = JSON.parse(rawData);
const data4 = JSON.parse(rawData);
// ※ 型アサーションを使用すると、全く関係ない型に再定義できてしまう
const invalidData2 = JSON.parse(rawData);
const invalidData3 = JSON.parse(rawData);
const invalidData4 = JSON.parse(rawData);
const invalidData5 = JSON.parse(rawData);
// 9.4.1　キャッチされるエラーの型アサーション
// *************************************************
try {
}
catch (error) {
    console.warn("Oh no!", error.message);
}
try {
}
catch (error) {
    console.warn("Oh no!", error instanceof Error ? error.message : error);
}
// 9.4.2　非nullアサーション
// *************************************************
let maybeDate = Math.random() > 0.5 ? undefined : new Date();
const checkData = maybeDate;
const checkData2 = maybeDate;
const checkData3 = maybeDate;
const seasonCounts = new Map([["I Love Lucy", 6], ["The Golden Girls", 7]]);
const maybeValue = seasonCounts.get("I Love Lucy");
// console.log(maybeValue.toString());
console.log(maybeValue.toString());
const knownValue = seasonCounts.get("The Golden Girls");
console.log(knownValue.toString());
// 9.4.3　型アサーションの注意事項
// *************************************************
const seasonCounts2 = new Map([["I Love Lucy", 6], ["The Golden Girls", 7]]);
const knownValue2 = seasonCounts.get("Broad City");
// const declared: Entertainer = {
//     name: "Moms Mabley",
// }
const asserted = {
    name: "Moms Mabley",
};
// TypeScriptではエラーにならないが、JavaScriptでクラッシュする
// console.log(declared.acts.join(", "));
// TypeScriptではエラーにならないが、JavaScriptでクラッシュする
// console.log(asserted.acts.join(", "));
// 9.4.3.2　型アサーションの割り当て可能性
// *************************************************
// プリミティブ型からプリミティブ型には変更できない
// let myValue = "Stella!" as number;
let myValueDouble = "1337";
// 9.5　constアサーション
// *************************************************
const readonlyArray = [0, ''];
// 9.5.1　リテラルとプリミティブ型
// *************************************************
const getName = () => "Maria Bamford";
const getNameConst = () => "Maria Bamford";
function tellJoke(joke) {
    if (joke.style === "one-liner") {
        console.log(joke.quote);
    }
    else {
        console.log(joke.quote.split("\n"));
    }
}
const narrowJoke = {
    quote: "If you stay alive for no other reason do it for spite.",
    style: "one-liner"
};
tellJoke(narrowJoke);
const wideJoke = {
    quote: "Time files when you are anxious",
    style: "one-liner"
};
// "one-liner"がstring型のため、エラーになる
// tellJoke(wideJoke);
// MEMO 
// ---------------------------------------------------
const literalData = "literal string";
// ※ constで文字列を宣言したとき、型推論でリテラル型になるが、
const object = {
    string: "invalid literal string",
    literalString: "literal string",
    number: 0,
};
//   constでオブジェクトを宣言した場合の文字列はリテラル型にならない（string型になる）
// ※ constで宣言したオブジェクトのプロパティをリテラル型にしたい場合、
//   「as const」で明示的に宣言する必要がある 
// ---------------------------------------------------
// 9.5.2　読み取り専用オブジェクト
// *************************************************
function describePreference(preference) {
    switch (preference) {
        case "maybe":
            return "I suppose ...";
        case "no":
            return "No thanks";
        case "yes":
            return "Yes please!";
    }
}
const preferencesMutable = {
    movie: "maybe",
    standup: "yes",
};
// movieがstring型のためエラー
// describePreference(preferencesMutable.movie);
preferencesMutable.movie = "no";
const preferenceReadonly = {
    movie: "maybe",
    standup: "yes",
};
describePreference(preferenceReadonly.movie);
// readonlyのため、エラーになる
// preferenceReadonly.movie = "no";
let preferenceReadonly2 = {
    movie: "maybe",
    standup: "yes",
};
// MEMO 
// ---------------------------------------------------
// ※ オブジェクトリテラルに「as const」を使って宣言すると、
//   すべてのメンバーが「as const」で宣言されたのと同義になる
// ※ 「as const」の効果は、let・constどちらの変数宣言でも同様
// ---------------------------------------------------
