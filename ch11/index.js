"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = exports.logLines = exports.logWindowVersion = exports.character = void 0;
exports.character = {
    catchphrase: "Yee-haw!",
    name: "Sandy Cheeks",
};
console.log(myGlobalValue);
// 11.2.2　グローバルなインターフェースのマージ
// *************************************************
function logWindowVersion() {
    console.log("Window version is: ".concat(window.myVersion));
    window.alert("Built-in window types still work! Hooray!");
}
exports.logWindowVersion = logWindowVersion;
var globals_1 = require("./types/globals");
function logData(data) {
    console.log("Data version is ".concat(data.version));
}
// 型引数がData型じゃないのでエラーになる
//logData("aaa");
logData(globallyDeclared);
logData(globals_1.locallyDeclared);
// 11.3　組み込み宣言
// *************************************************
// 11.3.1　ライブラリー宣言
// *************************************************
function logLines(lines) {
    lines.forEach(function () { });
}
exports.logLines = logLines;
// 11.4 モジュール宣言
// *************************************************
var my_example_lib_1 = require("my-example-lib");
console.log(my_example_lib_1.value);
// 11.5 パッケージの型
// *************************************************
// 11.5.1 declaration
// *************************************************
var greet = function (text) {
    console.log("Hello, ".concat(text));
};
exports.greet = greet;
// 11.5.2 依存パッケージの型
// *************************************************
// 11.5.3 パッケージの型を公開する
// *************************************************
// 11.6 Definitely Typed
// *************************************************
// 11.6.1 型の入手可能性
// *************************************************
