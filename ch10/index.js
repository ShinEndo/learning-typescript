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
logWrapper(function (input) { return console.log(input.length); });
// 型：（input: unknown) => void
// logWrapper((input) => console.log(input.length)); // エラーになる
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
// NG: 引数の数よりも少ない数の型引数を指定した場合、エラーになる
// const makedPai4 = makePai<string>("abc",123);
// NG: 引数の数よりも多い数の型引数を指定した場合も同様にエラーになる
// const makedPai5 = makePai<string,number,boolean>("abc",123);
// NG: 型引数と引数の型が違う場合、エラーになる
// const makedpai6 = makePai<number,string>("abc",123);
// const makedpai7 = makePai<"abcd",1234>("abc",123);
