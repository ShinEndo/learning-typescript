// 11　宣言ファイル
// *************************************************
// 11.1　宣言ファイル（.d.ts）
// *************************************************
import { Character } from "./types";

export const character: Character = {
    catchphrase: "Yee-haw!",
    name: "Sandy Cheeks",
};

// 11.2　ランタイム値の宣言
// *************************************************
declare const myGlobalValue: string;
console.log(myGlobalValue);

// 11.2.2　グローバルなインターフェースのマージ
// *************************************************
export function logWindowVersion() {
    console.log(`Window version is: ${window.myVersion}`);
    window.alert("Built-in window types still work! Hooray!");
}

// 11.2.3　グローバルな拡張
// *************************************************
import { Data } from "./types/data";
import { locallyDeclared } from "./types/globals";

function logData(data: Data) {
    console.log(`Data version is ${data.version}`);
}

// 型引数がData型じゃないのでエラーになる
//logData("aaa");

logData(globallyDeclared);
logData(locallyDeclared);

// 11.3　組み込み宣言
// *************************************************
// 11.3.1　ライブラリー宣言
// *************************************************
export function logLines(lines: string[]){
    lines.forEach(()=>{});
}

