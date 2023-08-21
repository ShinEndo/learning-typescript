"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = exports.logLines = exports.character = void 0;
exports.character = {
    catchphrase: "Yee-haw!",
    name: "Sandy Cheeks",
};
console.log(myGlobalValue);
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
// import { value } from "my-example-lib";
// console.log(value);
// 11.5 パッケージの型
// *************************************************
// 11.5.1 declaration
// *************************************************
var greet = function (text) {
    console.log("Hello, ".concat(text));
};
exports.greet = greet;
// 11.5.1 declaration
// *************************************************
