"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logWindowVersion = exports.character = void 0;
exports.character = {
    catchphrase: "Yee-haw!",
    name: "Sandy Cheeks",
};
console.log(myGlobalValue);
// 11.2.2　グローバルなインターフェースのマージ
// *************************************************
function logWindowVersion() {
    // console.log(`Window version is: ${window.myVersion}`);
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
